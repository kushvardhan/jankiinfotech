import { Metadata } from "next";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const defaultSEO = {
  title:
    "JankiInfotech - Leading IT Solutions & Training in Bihar, UP, Jharkhand",
  description:
    "JankiInfotech provides world-class web development, mobile apps, software development, digital marketing, and professional training programs across Bihar, Uttar Pradesh, Jharkhand, and Eastern India. Empowering local talent with global technology standards in Darbhanga, Patna, Muzaffarpur, and beyond.",
  keywords:
    "JankiInfotech, web development Bihar, mobile app development Darbhanga, software development Patna, digital marketing Bihar, IT company Darbhanga, web development UP, mobile app development Jharkhand, training programs Bihar, internship Darbhanga, IT solutions Eastern India, website development Muzaffarpur, app development Bhagalpur, software company Bihar, digital marketing UP, ",
  url: "https://jankiinfotech.com",
  image: "https://jankiinfotech.com/images/og-image.png",
  type: "website" as const,
};

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | JankiInfotech` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;

  return {
    metadataBase: new URL("https://jankiinfotech.com"),
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: author
      ? [{ name: author }]
      : [
          { name: "JankiInfotech Team" },
          { name: "Kush Vardhan", url: "mailto:kushvardhan39797@gmail.com" },
        ],
    creator: "JankiInfotech",
    publisher: "JankiInfotech",
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
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: "JankiInfotech",
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: "en_US",
      type: type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: "@jankiinfotech",
      site: "@jankiinfotech",
    },
    alternates: {
      canonical: seoUrl,
    },
    verification: {
      google: "your-google-verification-code", // Replace with actual verification code
    },
    other: {
      developer: "Kush Vardhan",
      "developer-email": "kushvardhan39797@gmail.com",
      "developed-by": "Kush Vardhan (kushvardhan39797@gmail.com)",
      "website-developer": "Kush Vardhan",
      "technical-lead": "Kush Vardhan",
    },
  };
}

export function generateStructuredData(
  type: "organization" | "website" | "service" | "article",
  data: Record<string, unknown>
) {
  const baseUrl = "https://jankiinfotech.com";

  switch (type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "JankiInfotech",
        alternateName: "Janki Infotech",
        url: baseUrl,
        logo: `/public/browsericon.png`,
        description:
          "Leading IT solutions and training company in Bihar, India. Specializing in web development, mobile apps, cloud solutions, and professional training programs.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Your Street Address", // Replace with actual address
          addressLocality: "Patna",
          addressRegion: "Bihar",
          postalCode: "800001", // Replace with actual postal code
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 76329 66717", // Replace with actual phone
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://x.com/Jankiinfotech_",
          "https://www.instagram.com/_jankiinfotech_/",
          "https://www.facebook.com/profile.php?id=61581206342758",
          "https://www.linkedin.com/company/jankiinfotech/?viewAsMember=true",
        ],
        foundingDate: "2019",
        numberOfEmployees: "20-50",
        industry: "Information Technology",
        services: [
          "Web Development",
          "Mobile App Development",
          "Cloud Solutions",
          "DevOps Services",
          "Google My Business (GMB) Optimization",
          "IT Training",
          "Software Consulting",
          "Digital Marketing",
        ],
        developer: {
          "@type": "Person",
          name: "Kush Vardhan",
          email: "kushvardhan39797@gmail.com",
          url: "https://kush-personal-portfolio-my-portfolio.vercel.app/",
          jobTitle: "Full Stack Developer",
        },
      };

    case "website":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "JankiInfotech",
        url: baseUrl,
        description:
          "Leading IT solutions and training company in Bihar, India.",
        publisher: {
          "@type": "Organization",
          name: "JankiInfotech",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.name || "IT Solutions",
        description:
          data.description || "Professional IT solutions and services",
        provider: {
          "@type": "Organization",
          name: "JankiInfotech",
          url: baseUrl,
        },
        areaServed: {
          "@type": "Place",
          name: "Bihar, India",
        },
        serviceType: data.serviceType || "Information Technology",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceRange: data.priceRange || "Contact for pricing",
        },
      };

    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        author: {
          "@type": "Organization",
          name: "JankiInfotech",
        },
        publisher: {
          "@type": "Organization",
          name: "JankiInfotech",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/logo.png`,
          },
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
        image: data.image,
      };

    default:
      return null;
  }
}
