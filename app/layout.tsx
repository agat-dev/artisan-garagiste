import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { JetBrains_Mono, Inter, Roboto_Mono } from "next/font/google"

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoExpert - Garage Automobile de Confiance | Paris 11ème",
  description:
    "Garage automobile AutoExpert à Paris 11ème. +15 ans d'expertise en réparation, diagnostic électronique, carrosserie et entretien. Prise de rendez-vous en ligne. Devis gratuit.",
  keywords: [
    "garage automobile",
    "réparation voiture",
    "diagnostic électronique",
    "carrosserie",
    "entretien automobile",
    "géométrie 3D",
    "Paris 11ème",
    "AutoExpert",
    "mécanicien",
    "révision voiture",
    "climatisation auto",
    "freinage",
    "transmission",
  ],
  authors: [{ name: "AutoExpert" }],
  creator: "AutoExpert",
  publisher: "AutoExpert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://autoexpert-garage.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AutoExpert - Votre Garage de Confiance à Paris",
    description:
      "Expertise technique de pointe, équipements dernière génération et service personnalisé pour l'entretien et la réparation de votre véhicule. +15 ans d'expérience.",
    url: "https://autoexpert-garage.fr",
    siteName: "AutoExpert",
    images: [
      {
        url: "/mechanic-working-engine.png",
        width: 800,
        height: 600,
        alt: "Intérieur moderne de l'atelier AutoExpert avec équipements professionnels - Garage automobile Paris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoExpert - Garage Automobile de Confiance",
    description:
      "Garage automobile à Paris 11ème. Expertise technique, équipements modernes, service personnalisé. Prise de rendez-vous en ligne.",
    images: ["/garage-workshop-interior.png"],
    creator: "@autoexpert_paris",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Automobile",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-garage.png" type="image/png" />
        <link rel="icon" href="/logo-garage.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-garage.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Facebook App ID pour OpenGraph */}
        <meta property="fb:app_id" content="123456789012345" />
        <meta name="facebook-domain-verification" content="v7sb3s1uz9j54einm2f3g3d4kbgqx9" />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "AutoExpert",
              description:
                "Garage automobile professionnel spécialisé en réparation, diagnostic électronique et entretien de véhicules",
              url: "https://artisan-garagiste.lapetitevitrine.com",
              logo: "https://artisan-garagiste.lapetitevitrine.com/logo.png",
              image: "https://artisan-garagiste.lapetitevitrine.com/garage-workshop-interior.png",
              telephone: "+33123456789",
              email: "contact@autoexpert.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Avenue de la République",
                addressLocality: "Paris",
                postalCode: "75011",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "48.8566",
                longitude: "2.3522",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
              priceRange: "€€",
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
              currenciesAccepted: "EUR",
              areaServed: {
                "@type": "City",
                name: "Paris",
              },
              serviceType: [
                "Réparation automobile",
                "Diagnostic électronique",
                "Entretien véhicule",
                "Carrosserie",
                "Géométrie 3D",
                "Climatisation automobile",
              ],
              foundingDate: "2008",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Marie Dubois",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Service impeccable, équipe professionnelle. Ma voiture n'a jamais été aussi bien entretenue !",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Pierre Martin",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "Diagnostic précis et réparation rapide. Je recommande vivement ce garage !",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services AutoExpert",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Révision complète",
                      description: "Révision complète de votre véhicule selon les préconisations constructeur",
                    },
                    price: "120",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "120",
                      priceCurrency: "EUR",
                      valueAddedTaxIncluded: true,
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diagnostic électronique",
                      description: "Diagnostic électronique avancé avec équipements professionnels",
                    },
                    price: "80",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "80",
                      priceCurrency: "EUR",
                      valueAddedTaxIncluded: true,
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${jetBrains.variable} ${inter.variable} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
}
