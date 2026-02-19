import { NextResponse } from "next/server"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body?.email === "string" ? body.email.trim() : ""

    if (!email) {
      return NextResponse.json(
        { message: "El correo es obligatorio." },
        { status: 400 }
      )
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Introduce un correo válido." },
        { status: 400 }
      )
    }

    // Aquí puedes conectar con tu base de datos, Resend, Mailchimp, etc.
    // Por ahora solo validamos y devolvemos éxito.
    // Ejemplo con Resend: await resend.emails.send({ from: '...', to: email, subject: '...', html: '...' })
    console.log("[waitlist] Nuevo registro:", email)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { message: "Error al procesar la solicitud." },
      { status: 500 }
    )
  }
}
