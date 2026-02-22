import { Leaf } from "lucide-react"

export function Footer() {
  const footerLinks: Record<string, { label: string; href: string }[]> = {
    Producto: [
      { label: "Cómo Funciona", href: "#how-it-works" },
      { label: "Para Negocios", href: "#" },
      { label: "Precios", href: "#" },
      { label: "Descargar App", href: "#" },
    ],
    Empresa: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Nuestra Misión", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Kit de Prensa", href: "#" },
    ],
    Recursos: [
      { label: "Blog", href: "#" },
      { label: "Centro de Ayuda", href: "#" },
      { label: "Comunidad", href: "#" },
      { label: "Contáctanos", href: "#" },
    ],
    Legal: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Política de Cookies", href: "#" },
      { label: "Directrices", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">life2food</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Conectando comunidades para reducir el desperdicio de alimentos y crear un futuro sostenible para todos.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 life2food. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
