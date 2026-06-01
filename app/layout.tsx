import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Enterprise Group | Trust • Service • Quality | Thawe, Gopalganj",
  description:
    "Mohit Enterprise Group (MEG) - Your trusted business partner in Thawe, Gopalganj, Bihar. Mohit Mobile: accessories, ticket booking, online services. Mohit General Store: cosmetics, gifts, household products.",
  keywords:
    "Mohit Enterprise Group, MEG, Mohit Mobile, Mohit General Store, Thawe, Gopalganj, Bihar, mobile accessories, ticket booking, cosmetics, gifts",
  authors: [{ name: "Mohit Enterprise Group" }],
  openGraph: {
    title: "Mohit Enterprise Group | Trust • Service • Quality",
    description:
      "Your trusted business partner in Thawe, Gopalganj, Bihar. Mobile accessories, online services, cosmetics, gifts and more.",
    url: "https://mohitenterprisegroup.com",
    siteName: "Mohit Enterprise Group",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Enterprise Group | Trust • Service • Quality",
    description: "Your trusted business partner in Thawe, Gopalganj, Bihar.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mohit Enterprise Group",
              description:
                "Trusted business group offering mobile accessories, online services, cosmetics, gifts and household products.",
              url: "https://mohitenterprisegroup.com",
              telephone: "+919973482789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sukulwa Market, In Front of Thawe Railway Station",
                addressLocality: "Thawe",
                addressRegion: "Bihar",
                postalCode: "841440",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.7271",
                longitude: "84.3972",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
                ],
                opens: "07:00",
                closes: "20:00",
              },
              founder: {
                "@type": "Person",
                name: "Sheshnath Gupta",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
