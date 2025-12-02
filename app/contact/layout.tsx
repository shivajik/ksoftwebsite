import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Consultation - KSoft Solution",
  description: "Contact KSoft Solution for a free consultation. Visit our office at STPI Chikhalthana, Chhatrapati Sambhaji Nagar or call +91-976-541-2319. We respond within 24 hours.",
  keywords: ["contact KSoft Solution", "free consultation", "get quote", "Aurangabad office", "STPI Chikhalthana", "web development quote"],
  alternates: {
    canonical: "https://ksoftsolution.com/contact",
  },
  openGraph: {
    title: "Contact Us | KSoft Solution",
    description: "Get a free consultation. Call +91-976-541-2319 or visit our office at STPI Chikhalthana.",
    url: "https://ksoftsolution.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | KSoft Solution",
    description: "Get a free consultation. Call +91-976-541-2319 or visit our office at STPI Chikhalthana.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
