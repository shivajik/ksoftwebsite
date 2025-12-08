import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

function generateInquiryEmailHTML(data: ContactFormData): string {
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
                    <span style="color: #333;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Email:</strong>
                    <a href="mailto:${data.email}" style="color: #4A90E2; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Mobile:</strong>
                    <a href="tel:${data.phone}" style="color: #4A90E2; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Company:</strong>
                    <span style="color: #333;">${data.company}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <strong style="color: #666; display: inline-block; width: 140px;">Service Required:</strong>
                    <span style="color: #333; background-color: #e8f4fd; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${data.service}</span>
                  </td>
                </tr>
              </table>
              
              <h2 style="margin: 30px 0 15px; color: #333; font-size: 18px; border-bottom: 2px solid #4A90E2; padding-bottom: 10px;">Project Details</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #4A90E2;">
                <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
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
                Dear <strong>${data.name}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; color: #555; font-size: 15px; line-height: 1.8;">
                Thank you for reaching out to <strong>KSoft Solution</strong>! We have received your inquiry regarding <strong>${data.service}</strong> and our team is reviewing your requirements.
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

    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.log("RESEND_API_KEY not configured. Storing inquiry for manual follow-up.");
      console.log("New Inquiry:", JSON.stringify(data, null, 2));
      
      return NextResponse.json({
        success: true,
        message: "Inquiry received. Our team will contact you soon.",
        note: "Email service not configured - inquiry logged for manual follow-up"
      });
    }

    const inquiryEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "KSoft Solution <noreply@ksoftsolution.com>",
        to: ["shivaji@ksoftsolution.com"],
        subject: `New Inquiry: ${data.service} - ${data.name}`,
        html: generateInquiryEmailHTML(data),
        reply_to: data.email,
      }),
    });

    if (!inquiryEmailResponse.ok) {
      const errorData = await inquiryEmailResponse.json();
      console.error("Failed to send inquiry email:", errorData);
    }

    const autoReplyResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "KSoft Solution <noreply@ksoftsolution.com>",
        to: [data.email],
        subject: "Thank You for Your Inquiry - KSoft Solution",
        html: generateAutoReplyEmailHTML(data),
      }),
    });

    if (!autoReplyResponse.ok) {
      const errorData = await autoReplyResponse.json();
      console.error("Failed to send auto-reply email:", errorData);
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
