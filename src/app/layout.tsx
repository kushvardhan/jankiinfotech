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

export const metadata: Metadata = {
  ...generateMetadata(),
  icons: {
    icon: [
      { url: "/browsericon.png", type: "image/png" },
      { url: "/browsericon.png", sizes: "32x32", type: "image/png" },
      { url: "/browsericon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/browsericon.png",
    apple: [
      { url: "/browsericon.png" },
      { url: "/browsericon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

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
        {/* ✅ Browser Icons - Multiple formats for better compatibility */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/browsericon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/browsericon.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/browsericon.png" />
        <link rel="shortcut icon" href="/browsericon.png" />

        {/* ✅ Structured Data */}
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
      >
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
