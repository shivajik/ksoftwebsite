import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;
    
    if (!email || !pass) {
      return null;
    }
    
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: pass,
      },
    });
  }
  return transporter;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateInquiryEmailHTML(data: ContactFormData): string {
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone);
  const escapedCompany = data.company ? escapeHtml(data.company) : null;
  const escapedService = escapeHtml(data.service);
  const escapedMessage = escapeHtml(data.message);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry from KSoft Solution Website</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Inquiry Received</h1>
              <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">KSoft Solution Website</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #333; font-size: 18px; border-bottom: 2px solid #4A90E2; padding-bottom: 10px;">Contact Details</h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Name:</strong>
                    <span style="color: #333;">${escapedName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Email:</strong>
                    <a href="mailto:${escapedEmail}" style="color: #4A90E2; text-decoration: none;">${escapedEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Mobile:</strong>
                    <a href="tel:${escapedPhone}" style="color: #4A90E2; text-decoration: none;">${escapedPhone}</a>
                  </td>
                </tr>
                ${escapedCompany ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Company:</strong>
                    <span style="color: #333;">${escapedCompany}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Service Required:</strong>
                    <span style="color: #333; background-color: #e8f4fd; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${escapedService}</span>
                  </td>
                </tr>
              </table>
              
              <h2 style="margin: 30px 0 15px; color: #333; font-size: 18px; border-bottom: 2px solid #4A90E2; padding-bottom: 10px;">Project Details</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #4A90E2;">
                <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${escapedMessage}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #fff8e6; border-radius: 6px; border: 1px solid #ffd966;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #666; font-size: 12px;">
                This email was sent from the contact form on <a href="https://ksoftsolution.com" style="color: #4A90E2;">ksoftsolution.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

function generateAutoReplyEmailHTML(data: ContactFormData): string {
  const escapedName = escapeHtml(data.name);
  const escapedService = escapeHtml(data.service);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Inquiry - KSoft Solution</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Thank You!</h1>
              <p style="margin: 15px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">We've received your inquiry</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                Dear <strong>${escapedName}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; color: #555; font-size: 15px; line-height: 1.8;">
                Thank you for reaching out to <strong>KSoft Solution</strong>! We have received your inquiry regarding <strong>${escapedService}</strong> and our team is reviewing your requirements.
              </p>
              
              <div style="background-color: #e8f4fd; padding: 25px; border-radius: 8px; margin: 25px 0;">
                <h3 style="margin: 0 0 15px; color: #4A90E2; font-size: 16px;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555; line-height: 2;">
                  <li>Our team will review your project requirements</li>
                  <li>We'll prepare a customized solution proposal</li>
                  <li>A team member will contact you within 24-48 hours</li>
                </ul>
              </div>
              
              <p style="margin: 25px 0; color: #555; font-size: 15px; line-height: 1.8;">
                If you have any urgent questions, feel free to call us directly at <a href="tel:+919765412319" style="color: #4A90E2; text-decoration: none; font-weight: 600;">+91-976-541-2319</a>.
              </p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              
              <p style="margin: 0; color: #333; font-size: 15px;">
                Best Regards,<br>
                <strong style="color: #4A90E2;">The KSoft Solution Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Services -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px;">
                <h3 style="margin: 0 0 15px; color: #333; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Our Services</h3>
                <p style="margin: 0; color: #666; font-size: 13px; line-height: 1.8;">
                  Web Development | SEO Services | Digital Marketing | AI Integration | Mobile Apps | UI/UX Design
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #333; padding: 30px 40px; text-align: center;">
              <p style="margin: 0 0 10px; color: #ffffff; font-size: 16px; font-weight: 600;">KSoft Solution</p>
              <p style="margin: 0 0 15px; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                T-16, Software Technology Parks of India<br>
                Chikhalthana MIDC, Chhatrapati Sambhaji Nagar - 431008
              </p>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px;">
                <a href="https://ksoftsolution.com" style="color: #4A90E2; text-decoration: none;">ksoftsolution.com</a> | 
                <a href="mailto:info@ksoftsolution.com" style="color: #4A90E2; text-decoration: none;">info@ksoftsolution.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const emailTransporter = getTransporter();
    
    if (!emailTransporter) {
      console.log("EMAIL or EMAIL_PASS not configured. Storing inquiry for manual follow-up.");
      console.log("New Inquiry:", JSON.stringify(data, null, 2));
      
      return NextResponse.json({
        success: true,
        message: "Inquiry received. Our team will contact you soon.",
        note: "Email service not configured - inquiry logged for manual follow-up"
      });
    }

    const adminEmail = process.env.EMAIL;

    try {
      console.log(`Attempting to send inquiry notification to: ${adminEmail}`);
      await emailTransporter.sendMail({
        from: adminEmail,
        to: adminEmail,
        subject: `New Inquiry: ${data.service} - ${data.name}`,
        html: generateInquiryEmailHTML(data),
        replyTo: data.email,
      });
      console.log("Inquiry email sent successfully");
    } catch (error) {
      console.error("Failed to send inquiry email:", error);
    }

    try {
      console.log(`Attempting to send auto-reply to: ${data.email}`);
      await emailTransporter.sendMail({
        from: adminEmail,
        to: data.email,
        subject: "Thank You for Your Inquiry - KSoft Solution",
        html: generateAutoReplyEmailHTML(data),
      });
      console.log("Auto-reply email sent successfully");
    } catch (error) {
      console.error("Failed to send auto-reply email:", error);
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully. Check your email for confirmation.",
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}
