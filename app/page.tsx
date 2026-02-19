import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://life2food.com/#organization",
        "name": "life2food",
        "url": "https://life2food.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://life2food.com/apple-icon.png",
          "width": 512,
          "height": 512
        },
        "description": "Plataforma para reducir el desperdicio de alimentos conectando consumidores con restaurantes, supermercados y granjas locales.",
        "sameAs": [
          "https://facebook.com/life2food",
          "https://twitter.com/life2food",
          "https://instagram.com/life2food",
          "https://linkedin.com/company/life2food"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://life2food.com/#website",
        "url": "https://life2food.com",
        "name": "life2food",
        "description": "Reduce el desperdicio de alimentos, ahorra dinero",
        "publisher": {
          "@id": "https://life2food.com/#organization"
        },
        "inLanguage": "es-CO"
      },
      {
        "@type": "WebPage",
        "@id": "https://life2food.com/#webpage",
        "url": "https://life2food.com",
        "name": "life2food - Reduce el Desperdicio de Alimentos, Ahorra Dinero",
        "isPartOf": {
          "@id": "https://life2food.com/#website"
        },
        "about": {
          "@id": "https://life2food.com/#organization"
        },
        "description": "Únete al movimiento para reducir el desperdicio de alimentos. Compra alimentos excedentes de restaurantes, supermercados y granjas locales a excelentes precios.",
        "inLanguage": "es-CO"
      },
      {
        "@type": "Service",
        "serviceType": "Food Waste Reduction Platform",
        "provider": {
          "@id": "https://life2food.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Colombia"
        },
        "description": "Plataforma que conecta consumidores con negocios locales para rescatar alimentos excedentes y reducir el desperdicio.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceRange": "$$"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://life2food.com"
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <HowItWorks />
        <Waitlist />
        <Footer />
      </main>
    </>
  )
}
