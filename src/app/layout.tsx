import CustomCursor from "@/components/CustomCursor";
import FloatingButtons from "@/components/FloatingButtons";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
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

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData("organization", {});
  const websiteSchema = generateStructuredData("website", {});

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ cursor: "none" }}
      >
        <CustomCursor />
        {children}
        <FloatingButtons />

        {/* Hidden developer signature */}
        <div className="dev-signature" aria-hidden="true"></div>
        <div
          style={{
            position: "fixed",
            bottom: "0px",
            left: "0px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
            fontSize: "1px",
            color: "transparent",
          }}
        >
          Kush Vardhan kushvardhan39797@gmail.com
        </div>
      </body>
    </html>
  );
}
