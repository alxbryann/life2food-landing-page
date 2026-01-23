import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://life2food.com'),
  title: {
    default: "life2food - Reduce el Desperdicio de Alimentos, Ahorra Dinero",
    template: "%s | life2food"
  },
  description:
    "Únete al movimiento para reducir el desperdicio de alimentos. Compra alimentos excedentes de restaurantes, supermercados y granjas locales a excelentes precios. Ahorra hasta 70% mientras combates el cambio climático.",
  keywords: [
    "desperdicio de alimentos",
    "comida excedente",
    "ahorro en alimentos",
    "sostenibilidad",
    "restaurantes locales",
    "supermercados",
    "comida a bajo precio",
    "reducir desperdicio",
    "economía circular",
    "impacto ambiental",
    "bolsas sorpresa",
    "food waste",
    "Colombia",
    "Bogotá"
  ],
  authors: [{ name: "life2food" }],
  creator: "life2food",
  publisher: "life2food",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://life2food.com",
    siteName: "life2food",
    title: "life2food - Reduce el Desperdicio de Alimentos, Ahorra Dinero",
    description:
      "Únete al movimiento para reducir el desperdicio de alimentos. Compra alimentos excedentes de restaurantes, supermercados y granjas locales a excelentes precios.",
    images: [
      {
        url: "/fresh-produce-and-food-items-in-sustainable-packag.jpg",
        width: 1200,
        height: 630,
        alt: "life2food - Comida fresca rescatada del desperdicio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "life2food - Reduce el Desperdicio de Alimentos, Ahorra Dinero",
    description:
      "Únete al movimiento para reducir el desperdicio de alimentos. Compra alimentos excedentes a excelentes precios.",
    images: ["/fresh-produce-and-food-items-in-sustainable-packag.jpg"],
    creator: "@life2food",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://life2food.com",
    languages: {
      'es-CO': 'https://life2food.com',
      'es': 'https://life2food.com',
    },
  },
  verification: {
    google: "google-site-verification-code-here",
    // yandex: "yandex-verification-code-here",
    // bing: "bing-verification-code-here",
  },
  category: "food",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
