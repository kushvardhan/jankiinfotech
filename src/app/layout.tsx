import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "JankiInfotech - Startup Solutions | Cloud Infrastructure & DevOps Experts",
  description:
    "Delivering secure digital solutions and scalable cloud infrastructure tailored to power innovation and startup success. Your trusted technology partner for web development, cloud optimization, and DevOps solutions.",
  keywords:
    "web development, cloud infrastructure, DevOps, startup solutions, digital transformation, software development",
  authors: [{ name: "JankiInfotech Team" }],
  openGraph: {
    title: "JankiInfotech - Startup Solutions",
    description:
      "Delivering secure digital solutions and scalable cloud infrastructure tailored to power innovation and startup success.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
