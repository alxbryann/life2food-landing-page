import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)] relative z-10 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-[var(--fg)]">Life2Food</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
            <Link href="/terminos" className="hover:text-[var(--fg)] transition-colors">Términos</Link>
            <Link href="#" className="hover:text-[var(--fg)] transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-[var(--fg)] transition-colors">Contacto</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://instagram.com/life2food" className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[var(--fg)]" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/life2food" className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[var(--fg)]" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-[var(--muted)]">
          2026 Life2Food. Hecho con amor en Bogotá, Colombia.
        </div>
      </div>
    </footer>
  )
}

