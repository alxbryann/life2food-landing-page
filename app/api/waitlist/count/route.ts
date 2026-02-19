import { NextResponse } from "next/server"

/**
 * Obtiene el conteo de la lista de espera. Si API_URL o NEXT_PUBLIC_API_URL está configurado,
 * hace proxy al backend; si no, devuelve 0.
 */
export async function GET() {
  const apiUrl = (process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "")
    .replace(/\/$/, "")
  if (!apiUrl) {
    console.warn("[waitlist/count] API_URL o NEXT_PUBLIC_API_URL no configurado; devolviendo count 0")
    return NextResponse.json({ count: 0 })
  }
  try {
    const res = await fetch(`${apiUrl}/api/waitlist/count`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    })
    if (res.ok) {
      const data = await res.json()
      const count = typeof data?.count === "number" ? data.count : 0
      return NextResponse.json({ count })
    }
    console.warn("[waitlist/count] Backend respondió con", res.status, res.statusText)
  } catch (err) {
    console.warn("[waitlist/count] No se pudo conectar al backend:", (err as Error).message)
  }
  return NextResponse.json({ count: 0 })
}
