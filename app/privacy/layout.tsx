import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KSoft Solution",
  description: "Learn how KSoft Solution collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
  alternates: {
    canonical: "https://ksoftsolution.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | KSoft Solution",
    description: "Learn how KSoft Solution collects, uses, and protects your personal information.",
    url: "https://ksoftsolution.com/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | KSoft Solution",
    description: "Learn how KSoft Solution collects, uses, and protects your personal information.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
