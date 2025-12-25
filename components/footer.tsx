import { Leaf } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Producto: ["Cómo Funciona", "Para Negocios", "Precios", "Descargar App"],
    Empresa: ["Sobre Nosotros", "Nuestra Misión", "Carreras", "Kit de Prensa"],
    Recursos: ["Blog", "Centro de Ayuda", "Comunidad", "Contáctanos"],
    Legal: ["Política de Privacidad", "Términos de Servicio", "Política de Cookies", "Directrices"],
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
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
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
