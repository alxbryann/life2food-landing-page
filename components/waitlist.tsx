"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    <section
      id="lista-espera"
      className="relative py-24 lg:py-36 scroll-mt-20 overflow-hidden"
      aria-labelledby="waitlist-heading"
    >
      {/* Fondo que atrae la atención */}
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/15 to-primary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,800px)] h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          {/* Número gigante como foco principal */}
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Ya se unieron
            </p>
            <div className="min-h-[5rem] flex items-center justify-center">
              {waitlistCount === null ? (
                <span className="text-5xl lg:text-7xl font-black tabular-nums text-primary/60 animate-pulse">
                  —
                </span>
              ) : (
                <span className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tabular-nums text-primary drop-shadow-md">
                  {waitlistCount.toLocaleString("es")}
                </span>
              )}
            </div>
            <p className="text-lg font-semibold text-foreground">
              {waitlistCount === null
                ? "personas"
                : waitlistCount === 1
                  ? "persona en la lista"
                  : "personas en la lista"}
            </p>
          </div>

          <div>
            <h2 id="waitlist-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Únete a la lista de espera
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
              Sé el primero en saber cuando life2food esté disponible. Sin spam, solo novedades.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-primary/30 bg-primary/10 p-10 shadow-lg">
              <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden />
              <p className="text-xl font-semibold">¡Listo! Te avisaremos cuando lancemos.</p>
              <p className="text-sm text-muted-foreground">
                Revisa tu bandeja de entrada (y spam) para confirmar.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
                className="h-14 flex-1 min-w-0 text-base rounded-xl border-2 border-primary/30 focus-visible:ring-primary"
                aria-label="Correo electrónico"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                size="lg"
                className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 rounded-xl shadow-lg shadow-primary/25"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" aria-hidden />
                    Enviando…
                  </>
                ) : (
                  "Unirse ahora"
                )}
              </Button>
            </form>
          )}

          {status === "error" && message && (
            <p className="text-sm text-destructive font-medium" role="alert">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
