export const dynamic = "force-static";
export const revalidate = 3600;

"use client";

import { motion } from "framer-motion";
import Link from "@/components/ui/link";

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 9, 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by KSoft Solution (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including our website at ksoftsolution.com and any related services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the &quot;Last updated&quot; date. Your continued use of our services following any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KSoft Solution provides digital services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>AI integration and automation solutions</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Digital marketing services</li>
                  <li>UI/UX design</li>
                  <li>WordPress maintenance and support</li>
                  <li>Custom software development</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The specific scope, deliverables, and terms for each project will be outlined in a separate project agreement or statement of work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some of our services may require you to create an account. When you create an account, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as needed</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or illegal activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <h3 className="text-xl font-semibold mb-3">Pricing and Fees</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are quoted in Indian Rupees (INR) unless otherwise specified. Prices are subject to change without notice, but changes will not affect orders already confirmed in writing.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Payment Schedule</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>50% advance payment is required to begin work on any project</li>
                  <li>Remaining balance is due upon project completion or as per milestones agreed</li>
                  <li>Maintenance and subscription services are billed monthly in advance</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We accept payments via bank transfer, UPI, credit/debit cards, and other methods as specified during checkout. All payments are processed securely through our payment partners.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Late Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Invoices not paid within 15 days of the due date may incur a late fee of 2% per month. We reserve the right to suspend services for accounts with outstanding balances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds are handled on a case-by-case basis:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li><strong>Before Work Begins:</strong> Full refund of advance payment if cancelled before work commences</li>
                  <li><strong>During Development:</strong> Partial refund proportional to work not yet completed</li>
                  <li><strong>After Delivery:</strong> No refund after deliverables have been accepted</li>
                  <li><strong>Maintenance Services:</strong> No refund for the current billing period; cancellation takes effect at the end of the billing cycle</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To request a refund, please contact us at billing@ksoftsolution.com with your project details and reason for the request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold mb-3">Client Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to content, materials, and intellectual property you provide to us. By providing such content, you grant us a license to use it solely for the purpose of providing our services to you.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Our Work Product</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, you will own the final deliverables created specifically for your project. However, we retain the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Use general knowledge and skills gained during the project</li>
                  <li>Reuse generic code, frameworks, and methodologies</li>
                  <li>Display the work in our portfolio (unless otherwise agreed)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Third-Party Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Projects may include third-party components (libraries, plugins, stock assets) subject to their respective licenses. We will inform you of any such components and their licensing requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To ensure successful project delivery, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Provide timely feedback and approvals</li>
                  <li>Supply all required content, assets, and access credentials</li>
                  <li>Designate a primary point of contact for the project</li>
                  <li>Review and test deliverables within agreed timeframes</li>
                  <li>Ensure you have rights to all content provided to us</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Delays caused by late client responses may affect project timelines and may incur additional charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to keep confidential any proprietary information shared during the course of the engagement. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Business strategies and plans</li>
                  <li>Technical specifications and source code</li>
                  <li>Customer data and analytics</li>
                  <li>Financial information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This confidentiality obligation survives the termination of our business relationship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim</li>
                  <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>We are not responsible for third-party services, hosting providers, or platform changes outside our control</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We provide our services &quot;as is&quot; and make no warranties, express or implied, regarding merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless KSoft Solution and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Your use of our services</li>
                  <li>Your breach of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Content you provide that infringes on intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service agreement:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>With 30 days written notice for ongoing services</li>
                  <li>Immediately for material breach that is not cured within 14 days of notice</li>
                  <li>Immediately if either party becomes insolvent or bankrupt</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon termination, you will pay for all services rendered up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these Terms or our services shall be:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>First attempted to be resolved through good-faith negotiation</li>
                  <li>If negotiation fails, submitted to mediation in Chhatrapati Sambhaji Nagar, Maharashtra</li>
                  <li>Subject to the exclusive jurisdiction of courts in Chhatrapati Sambhaji Nagar, Maharashtra, India</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These Terms are governed by the laws of India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to use our services for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Any unlawful purpose or illegal activities</li>
                  <li>Distributing malware, spam, or harmful content</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Harassment, defamation, or discrimination</li>
                  <li>Any activity that could harm our reputation or business</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Force Majeure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including but not limited to natural disasters, acts of government, pandemics, or infrastructure failures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-secondary/20 rounded-xl border border-white/10">
                  <p className="text-foreground font-semibold">KSoft Solution</p>
                  <p className="text-muted-foreground mt-2">
                    T-16, Software Technology Parks of India<br />
                    Chikhalthana MIDC<br />
                    Chhatrapati Sambhaji Nagar, Maharashtra 431008<br />
                    India
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Email: <a href="mailto:legal@ksoftsolution.com" className="text-primary hover:underline">legal@ksoftsolution.com</a><br />
                    Phone: <a href="tel:+919765412319" className="text-primary hover:underline">+91-976-541-2319</a>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link href="/privacy" className="text-primary hover:underline">
                View our Privacy Policy →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
