import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Maintenance Services | Security, Updates & Support",
  description: "Professional WordPress maintenance services including security updates, plugin management, backups, performance optimization, and 24/7 support. Keep your WordPress site secure, fast, and always up-to-date.",
  keywords: ["WordPress maintenance", "WordPress security", "WordPress updates", "WordPress backup", "WordPress support", "WordPress optimization", "WordPress management", "website maintenance"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/wordpress-maintenance",
  },
  openGraph: {
    title: "WordPress Maintenance Services | KSoft Solution",
    description: "Keep your WordPress site secure, fast, and always up-to-date with our professional maintenance services.",
    url: "https://ksoftsolution.com/services/wordpress-maintenance",
    type: "website",
    images: [
      {
        url: "/generated_images/wordpress_maintenance_dashboard_and_security.png",
        width: 1200,
        height: 630,
        alt: "WordPress Maintenance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Maintenance Services | KSoft Solution",
    description: "Keep your WordPress site secure, fast, and always up-to-date with our professional maintenance services.",
  },
};

export default function WordPressMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
