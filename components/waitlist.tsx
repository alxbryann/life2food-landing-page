"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

function getApiBase() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""
  return apiUrl ? apiUrl.replace(/\/$/, "") : ""
}

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data: { count?: number }) => setWaitlistCount(data.count ?? 0))
      .catch(() => setWaitlistCount(0))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("loading")
    setMessage("")
    const base = getApiBase()
    const url = base ? `${base}/api/waitlist` : "/api/waitlist"
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus("error")
        setMessage((data as { message?: string }).message || "Algo salió mal. Intenta de nuevo.")
        return
      }
      setStatus("success")
      setEmail("")
      setWaitlistCount((c) => (c !== null ? c + 1 : null))
    } catch {
      setStatus("error")
      setMessage("Error de conexión. Intenta de nuevo.")
    }
  }

  return (
    <section id="waitlist" className="py-24 relative z-10 bg-[var(--subtle)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal-scale active bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-warm)] to-[var(--accent)]"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[var(--accent)]/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[var(--accent-warm)]/10 blur-3xl"></div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm mb-6 relative">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span className="text-[var(--accent-dark)] font-medium">Lanzamiento Q1 2026</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--fg)] relative">
            Sé parte de la{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#3dd68c] bg-clip-text text-transparent">revolución</span>
          </h2>

          <p className="text-xl text-[var(--muted)] mb-10 max-w-xl mx-auto relative">
            Únete a nuestra lista de espera y sé de los primeros en acceder a ofertas exclusivas cuando lancemos
          </p>

          {status === "success" ? (
            <div className="mt-6 p-4 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 relative animate-in fade-in zoom-in duration-500">
              <div className="flex items-center justify-center gap-3" style={{ color: "var(--accent-dark)" }}>
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-semibold">Estás en la lista. Pronto tendrás noticias.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="input-field flex-1"
                  required
                  aria-label="Correo electrónico"
                  value={email}
                  disabled={status === "loading"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap flex items-center justify-center"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Unirme ahora"
                  )}
                </button>
              </div>
              <p className="text-xs text-[var(--muted)]">
                Sin spam. Solo noticias importantes sobre el lanzamiento.
              </p>
              {status === "error" && message && (
                <p className="text-sm text-red-500 font-medium" role="alert">
                  {message}
                </p>
              )}
            </form>
          )}

          <div className="mt-10 pt-8 border-t border-[var(--border)] relative">
            <p className="text-sm text-[var(--muted)] mb-4">Personas que ya se unieron</p>
            <div className="flex items-center justify-center">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-40">MC</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-30">JD</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-20">AR</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-10">LS</div>
                <div className="w-10 h-10 rounded-full bg-[var(--subtle)] border-2 border-white flex items-center justify-center text-xs font-bold z-0" style={{ color: "var(--accent-dark)" }}>
                  +<span className="counter tabular-nums">{waitlistCount === null ? "..." : (waitlistCount > 4 ? waitlistCount - 4 : 0).toLocaleString("es")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

