import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hridaya Consultancy | Labour Law & License Consultant in Vasai",
  description:
    "Hridaya Consultancy provides labour law compliance, licensing, payroll and statutory registration consultancy services in Vasai, Maharashtra. ESI, PF, MLWF, Factories Act, Professional Tax, Gumasta License, Udyog Aadhaar, FSSAI.",
  keywords: [
    "Labour Law Consultant Vasai",
    "Labour Compliance Consultant",
    "License Consultant Vasai",
    "Payroll Management Vasai",
    "ESI Consultant",
    "Provident Fund Consultant",
    "Gumasta License Consultant",
    "FSSAI Licence Consultant",
    "Udyog Aadhaar Registration",
    "Hridaya Consultancy",
    "Nilesh Gawas",
  ],
  authors: [{ name: "Hridaya Consultancy" }],
  creator: "Hridaya Consultancy",
  publisher: "Hridaya Consultancy",
  metadataBase: new URL("https://www.hridayaconsultancy.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hridayaconsultancy.in",
    siteName: "Hridaya Consultancy",
    title: "Hridaya Consultancy | Labour Law & License Consultant in Vasai",
    description:
      "Professional labour law compliance, licensing, payroll and statutory registration consultancy in Vasai, Maharashtra.",
    images: [
      {
        url: "/hc-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Hridaya Consultancy - Labour Law & License Consultant",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hridaya Consultancy | Labour Law & License Consultant in Vasai",
    description:
      "Professional labour law compliance, licensing and payroll consultancy in Vasai, Maharashtra.",
    images: ["/hc-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
