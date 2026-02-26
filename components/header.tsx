"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-[var(--fg)]">Life2Food</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#como-funciona" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm font-medium">Cómo funciona</Link>
            <Link href="#bogota" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm font-medium">Bogotá</Link>
            <Link href="#waitlist" className="btn-primary text-sm py-3 px-6 inline-flex items-center justify-center">Únete a la lista</Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-[var(--fg)]"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <Link
            href="#como-funciona"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#bogota"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
          >
            Bogotá
          </Link>
          <Link
            href="#waitlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary text-lg px-8 py-4"
          >
            Únete a la lista
          </Link>
        </div>
      )}
    </>
  )
}

