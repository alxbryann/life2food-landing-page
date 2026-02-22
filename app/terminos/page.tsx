import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de uso de la plataforma Life2Food - Reduciendo el desperdicio de alimentos.",
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-3xl">
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="bg-primary text-primary-foreground px-6 py-10 text-center">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Términos y Condiciones</h1>
              <p className="opacity-90">Life2Food - Reduciendo el desperdicio de alimentos</p>
            </div>
            <div className="p-6 lg:p-10 space-y-8 text-muted-foreground">
              <p className="text-center text-sm italic bg-muted/50 py-3 px-4 rounded-lg">
                <strong className="text-foreground">Fecha de última actualización:</strong> 28/02/2026
              </p>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">1. Información general</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">1.1 Identificación de la plataforma</h3>
                <p className="text-justify mb-3">Life2Food es una plataforma digital que opera en Colombia, facilitando la conexión entre establecimientos comerciales (tiendas y restaurantes) y consumidores finales para la venta de productos alimenticios con fechas de vencimiento próximas o platos no reclamados, contribuyendo así a la reducción del desperdicio de alimentos.</p>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">1.2 Aceptación de los términos</h3>
                <p className="text-justify">Al acceder y utilizar la plataforma Life2Food, el usuario acepta de manera expresa e irrevocable estos Términos y Condiciones, así como nuestra Política de Privacidad. Si no está de acuerdo con alguno de estos términos, deberá abstenerse de utilizar nuestros servicios.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">2. Definiciones</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Plataforma:</strong> La aplicación móvil y/o sitio web Life2Food</li>
                  <li><strong className="text-foreground">Usuario consumidor:</strong> Persona natural que adquiere productos a través de la plataforma para uso personal</li>
                  <li><strong className="text-foreground">Usuario negocio:</strong> Tiendas, restaurantes y establecimientos comerciales que ofrecen productos en la plataforma</li>
                  <li><strong className="text-foreground">Productos:</strong> Alimentos y bebidas con fechas de vencimiento próximas o platos preparados no reclamados</li>
                  <li><strong className="text-foreground">Carrito:</strong> Conjunto de productos seleccionados por el Usuario Consumidor para su compra</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">3. Registro y cuentas de usuario</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">3.1 Creación de cuenta</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Todos los usuarios deben registrarse y crear una cuenta para utilizar los servicios de Life2Food</li>
                  <li>La información proporcionada debe ser veraz, exacta y actualizada</li>
                  <li>Cada usuario es responsable de mantener la confidencialidad de sus credenciales de acceso</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">3.2 Tipos de cuenta</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong className="text-foreground">Cuenta consumidor:</strong> Para personas que desean comprar productos</li>
                  <li><strong className="text-foreground">Cuenta negocio:</strong> Para establecimientos que desean vender productos en la plataforma</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">3.3 Información requerida</h3>
                <p className="mb-2">Para el funcionamiento de la plataforma, Life2Food recopila y procesa:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos de contacto (correo electrónico, teléfono)</li>
                  <li>Información de ubicación y direcciones de entrega</li>
                  <li>Datos bancarios y de pago</li>
                  <li>Información de identificación según corresponda</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">4. Funcionamiento de la plataforma</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">4.1 Para usuarios negocio</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Pueden publicar productos alimenticios con fechas de vencimiento cercanas o platos no reclamados</li>
                  <li>Deben garantizar la calidad e inocuidad de los productos ofrecidos</li>
                  <li>Son responsables de actualizar la disponibilidad de los productos</li>
                  <li>Deben cumplir con todas las regulaciones sanitarias aplicables</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">4.2 Para usuarios consumidor</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pueden navegar y seleccionar productos de diferentes establecimientos</li>
                  <li>Pueden agregar productos de múltiples tiendas en un mismo carrito</li>
                  <li>Deben verificar las fechas de vencimiento y condiciones de los productos antes de la compra</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">5. Sistema de comisiones y pagos</h2>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg my-4">
                  <h3 className="text-base font-semibold text-foreground mb-2">5.1 Comisión de Life2Food</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Life2Food cobra una comisión del <strong className="text-foreground">20%</strong> sobre el valor total del carrito</li>
                    <li>Cuando el carrito incluye productos de múltiples establecimientos, cada negocio contribuye proporcionalmente a completar el 20% de comisión según su participación en el valor total del carrito</li>
                  </ul>
                </div>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">5.2 Ejemplo de distribución</h3>
                <p className="text-justify mb-4">En un carrito de $100.000 COP con productos de 10 tiendas diferentes, cada tienda aportará aproximadamente un 2% para completar la comisión total del 20% de Life2Food, proporcional a su participación en el valor del carrito.</p>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">5.3 Procesamiento de pagos</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los pagos se procesan de forma segura a través de proveedores de pago certificados</li>
                  <li>Life2Food actuará como intermediario en las transacciones</li>
                  <li>Los fondos se distribuirán a los establecimientos después de deducir las comisiones correspondientes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">6. Obligaciones y responsabilidades</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">6.1 De Life2Food</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Facilitar la conexión entre usuarios</li>
                  <li>Procesar los pagos de manera segura</li>
                  <li>Mantener la funcionalidad de la plataforma</li>
                  <li>Proteger los datos personales conforme a la ley</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">6.2 De los usuarios negocio</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Garantizar la calidad e inocuidad de los productos</li>
                  <li>Cumplir con regulaciones sanitarias vigentes</li>
                  <li>Proporcionar información veraz sobre los productos</li>
                  <li>Mantener actualizada la disponibilidad de productos</li>
                  <li>Cumplir con los tiempos de preparación y entrega acordados</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">6.3 De los usuarios consumidor</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información de entrega correcta</li>
                  <li>Verificar los productos al recibirlos</li>
                  <li>Respetar las condiciones de los productos (fechas de vencimiento, etc.)</li>
                  <li>Realizar los pagos en los términos establecidos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">7. Política de devoluciones y reembolsos</h2>
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
                  <h3 className="text-base font-semibold text-foreground mb-2">7.1 Proceso de verificación al recibir</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>El usuario consumidor debe revisar cuidadosamente el estado de todos los productos <strong className="text-foreground">antes de confirmar la recepción</strong> en la aplicación</li>
                    <li>Una vez confirmada la recepción, se considera que los productos fueron entregados en condiciones satisfactorias</li>
                    <li>La confirmación de recepción activa el proceso de pago a los establecimientos</li>
                  </ul>
                </div>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">7.2 Productos en mal estado</h3>
                <p className="mb-2">Si al momento de la entrega los productos presentan deterioro, mal estado o no cumplen con las especificaciones publicadas, el usuario debe:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li><strong className="text-foreground">No confirmar la recepción</strong> en la aplicación</li>
                  <li><strong className="text-foreground">Contactar directamente</strong> con el restaurante o tienda a través de los canales disponibles en la plataforma</li>
                  <li><strong className="text-foreground">Intentar llegar a una solución</strong> directa con el establecimiento (reemplazo, descuento, etc.)</li>
                </ol>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">7.3 Sistema de quejas y mediación</h3>
                <p className="mb-2">Si no se logra una solución satisfactoria con el establecimiento, el usuario puede interponer una <strong className="text-foreground">queja formal</strong> en la aplicación.</p>
                <p className="mb-2">La queja debe incluir:</p>
                <ul className="list-disc pl-6 space-y-2 mb-2">
                  <li>Descripción detallada del problema</li>
                  <li>Evidencias fotográficas del estado del producto</li>
                  <li>Registro de la comunicación previa con el establecimiento</li>
                </ul>
                <p className="mb-4"><strong className="text-foreground">Plazo máximo:</strong> 2 horas posteriores al momento de la entrega para interponer la queja</p>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">7.4 Proceso de evaluación y reembolso</h3>
                <p className="mb-2">Life2Food evaluará cada queja de manera imparcial considerando:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Las evidencias presentadas por el usuario</li>
                  <li>La respuesta y evidencias del establecimiento</li>
                  <li>El historial de ambas partes en la plataforma</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong className="text-foreground">Si el usuario tiene la razón:</strong> Se procederá al reembolso del dinero correspondiente únicamente al producto específico en mal estado</li>
                  <li><strong className="text-foreground">Tiempo de reembolso:</strong> Entre 3 a 5 días hábiles una vez aprobada la solicitud</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">7.5 Exclusiones</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No se aceptan devoluciones por productos que venzan después de la entrega, siempre que la fecha de vencimiento haya sido claramente indicada al momento de la compra</li>
                  <li>No se procesarán quejas presentadas después del plazo de 2 horas</li>
                  <li>No se reembolsarán productos cuya recepción ya haya sido confirmada en la aplicación, excepto en casos de fraude comprobado</li>
                </ul>
              </section>

              <section id="proteccion-datos">
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">8. Protección de datos personales</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">8.1 Recopilación de datos</h3>
                <p className="mb-2">Life2Food recopila y procesa datos personales incluyendo:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Información de contacto</li>
                  <li>Datos de ubicación</li>
                  <li>Información bancaria y de pago</li>
                  <li>Datos de navegación y uso de la plataforma</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">8.2 Finalidad del tratamiento</h3>
                <p className="mb-2">Los datos se utilizan para:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Facilitar las transacciones comerciales</li>
                  <li>Mejorar la experiencia del usuario</li>
                  <li>Cumplir con obligaciones legales</li>
                  <li>Prevenir fraudes y garantizar la seguridad</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">8.3 Derechos de los titulares</h3>
                <p>Los usuarios tienen derecho a conocer, actualizar, rectificar y suprimir sus datos personales, conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">9. Limitación de responsabilidad</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">9.1 Rol de intermediario</h3>
                <p className="mb-2">Life2Food actúa como intermediario tecnológico entre usuarios. No es responsable por:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>La calidad específica de los productos ofrecidos por los establecimientos</li>
                  <li>Conflictos directos entre usuarios</li>
                  <li>Daños derivados del consumo de productos vencidos cuando la fecha fue claramente informada</li>
                </ul>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">9.2 Límites de responsabilidad</h3>
                <p>La responsabilidad de Life2Food se limita al valor de la transacción específica en cuestión.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">10. Propiedad intelectual</h2>
                <p className="text-justify">Todos los elementos de la plataforma Life2Food, incluyendo pero no limitado a marcas, logos, diseños, textos y código, son propiedad de Life2Food o sus licenciantes y están protegidos por las leyes de propiedad intelectual.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">11. Terminación del servicio</h2>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">11.1 Por el usuario</h3>
                <p className="mb-4">Los usuarios pueden cerrar su cuenta en cualquier momento a través de la configuración de la plataforma.</p>
                <h3 className="text-base font-semibold text-foreground mt-5 mb-2">11.2 Por Life2Food</h3>
                <p>Life2Food se reserva el derecho de suspender o terminar cuentas que violen estos términos y condiciones.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">12. Modificaciones</h2>
                <p className="text-justify">Life2Food se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas a los usuarios y entrarán en vigor después de su publicación en la plataforma.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">13. Ley aplicable y jurisdicción</h2>
                <p className="text-justify">Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será sometida a los tribunales competentes de Colombia.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-2 mb-4">14. Contacto</h2>
                <p className="mb-4">Para consultas sobre estos Términos y Condiciones, los usuarios pueden contactar a Life2Food a través de:</p>
                <div className="bg-muted/50 border border-border p-5 rounded-lg">
                  <ul className="space-y-2">
                    <li><strong className="text-foreground">Correo electrónico:</strong> Por definir</li>
                    <li><strong className="text-foreground">Teléfono:</strong> 3134872116</li>
                  </ul>
                </div>
              </section>

              <div className="bg-primary text-primary-foreground p-6 text-center font-semibold rounded-lg mt-8">
                Al utilizar Life2Food, usted reconoce haber leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
              </div>

              <div className="pt-6 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Leaf className="h-4 w-4" />
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
