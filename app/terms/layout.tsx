import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | KSoft Solution",
  description: "Read KSoft Solution's terms of service. Understand your rights and responsibilities when using our website and services.",
  alternates: {
    canonical: "https://ksoftsolution.com/terms",
  },
  openGraph: {
    title: "Terms of Service | KSoft Solution",
    description: "Read KSoft Solution's terms of service for using our website and services.",
    url: "https://ksoftsolution.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | KSoft Solution",
    description: "Read KSoft Solution's terms of service for using our website and services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
