import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | KSoft Solution - Digital Agency in Aurangabad",
  description: "KSoft Solution is a team of passionate engineers, designers, and strategists based in Chhatrapati Sambhaji Nagar (Aurangabad). We help local businesses compete globally with world-class digital solutions.",
  keywords: ["about KSoft Solution", "digital agency Aurangabad", "software company India", "tech company Maharashtra", "IT services Chhatrapati Sambhaji Nagar"],
  alternates: {
    canonical: "https://ksoftsolution.com/about",
  },
  openGraph: {
    title: "About Us | KSoft Solution",
    description: "A team of passionate engineers helping local businesses compete globally with world-class digital solutions.",
    url: "https://ksoftsolution.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | KSoft Solution",
    description: "A team of passionate engineers helping local businesses compete globally with world-class digital solutions.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
