import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Smartphone, Menu, Gift, CreditCard, Truck, Settings, GraduationCap } from "lucide-react"

export default function ITAppLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/food-spread-1.png" alt="Italian food spread" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/images/it-logo-white.png"
              alt="Italian Trattoria Logo"
              width={400}
              height={120}
              className="mx-auto mb-6"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent">
            IT APP
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            La aplicación móvil de Italian Trattoria España. Descubre auténtica cocina italiana, promociones
            exclusivas y mucho más, todo en la palma de tu mano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link
                href="https://drive.google.com/file/d/1PSo82nXgd87N0oXgA2REd_eGjr4caLNb/view?usp=drive_link"
                target="_blank"
              >
                <img
                  width="23"
                  height="23"
                  src="https://img.icons8.com/ios-filled/50/android-os.png"
                  alt="android-os"
                />
                Descargar para Android
              </Link>
            </Button>
            <Badge variant="outline" className="border-green-500 text-green-400 px-4 py-2">
              <Smartphone className="mr-2 h-4 w-4" />
              Disponible para Android
            </Badge>
          </div>
        </div>
      </section>

      {/* About Italian Trattoria */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/restaurant-interior.png" alt="Restaurant interior" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Sobre Italian Trattoria</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Italian Trattoria es una cadena de restaurantes dedicada a ofrecer la más auténtica experiencia
                gastronómica italiana. Con ingredientes frescos importados directamente de Italia y recetas
                tradicionales transmitidas de generación en generación, cada plato cuenta una historia de pasión y
                tradición culinaria.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestros restaurantes combinan el ambiente acogedor de una trattoria tradicional con la comodidad
                moderna, creando el lugar perfecto para disfrutar de una comida memorable con familia y amigos.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/food-spread-2.png"
                alt="Italian dishes"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Características de IT APP</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-gray-800/70 border-green-500/30 hover:border-green-500 transition-colors">
              <CardContent className="p-6 text-center">
                <Menu className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Menú Digital</h3>
                <p className="text-gray-400">
                  Explora nuestra carta completa con descripciones detalladas y precios actualizados
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-green-500/30 hover:border-green-500 transition-colors">
              <CardContent className="p-6 text-center">
                <Gift className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Promociones</h3>
                <p className="text-gray-400">
                  Accede a ofertas exclusivas y descuentos especiales solo para usuarios de la app
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-green-500/30 hover:border-green-500 transition-colors">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Tarjeta de Fidelidad</h3>
                <p className="text-gray-400">Acumula puntos con cada visita y canjéalos por recompensas especiales</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-green-500/30 hover:border-green-500 transition-colors">
              <CardContent className="p-6 text-center">
                <Truck className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Pedidos a Domicilio</h3>
                <p className="text-gray-400">
                  Enlaces directos a plataformas de delivery para pedir tu comida favorita
                </p>
              </CardContent>
            </Card>
          </div>

          {/* App Screenshots */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Image
                src="/images/app-home.png"
                alt="App home screen"
                width={250}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl border border-green-500/30"
              />
              <p className="mt-4 text-green-400 font-semibold">Pantalla Principal</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/app-menu.png"
                alt="App menu screen"
                width={250}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl border border-green-500/30"
              />
              <p className="mt-4 text-green-400 font-semibold">Menú Digital</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/app-coupons.png"
                alt="App coupons screen"
                width={250}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl border border-green-500/30"
              />
              <p className="mt-4 text-green-400 font-semibold">Promociones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Demo Video */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Video Funcionamiento Técnico - Primer Video</h2>
          <div className="bg-gray-800/70 rounded-lg p-8 border border-green-500/30 mb-6">
            <div className="aspect-video max-w-3xl mx-auto mb-6">
              <iframe
                src="https://drive.google.com/file/d/1MkcF70zm-TTm4Et9WvYaZOvgfitblumT/preview"
                width="100%"
                height="100%"
                className="rounded-lg"
                allow="autoplay"
              ></iframe>
            </div>
            <p className="text-gray-400 italic text-base">
              "Estaba un poco cansado jajaja, pero vendrá un mejor video después :)"
            </p>
          </div>
        </div>
      </section>

      {/* App Demo Video in Phone Frame */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Demostración en Vivo</h2>

          <div className="flex justify-center mb-16">
            {/* Phone Frame */}
            <div className="relative">
              <div className="w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl border-8 border-gray-700">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* Video */}
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/videos/demo-tecnico.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots Side by Side */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <Image
                src="/images/app-delivery.jpeg"
                alt="App delivery options"
                width={300}
                height={600}
                className="mx-auto rounded-2xl shadow-2xl border border-green-500/30"
              />
            </div>

            <div className="text-center">
              <Image
                src="/images/app-loyalty.jpeg"
                alt="App loyalty program"
                width={300}
                height={600}
                className="mx-auto rounded-2xl shadow-2xl border border-green-500/30"
              />
            </div>
          </div>

          {/* Central Text */}
          <div className="text-center mt-12">
            <h3 className="text-4xl font-bold text-white mb-4">Una aplicación simple para todos</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Diseñada pensando en la facilidad de uso, IT APP ofrece todas las funcionalidades que necesitas de manera
              intuitiva y accesible para usuarios de todas las edades.
            </p>
          </div>
        </div>
      </section>

      {/* Admin Backend */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Panel de Administración</h2>
          <div className="bg-gray-800/70 rounded-lg p-8 border border-green-500/30">
            <Settings className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-white">IT-Backend.es</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Para administradores de restaurantes, hemos desarrollado un completo sistema de gestión web que permite
              modificar y actualizar todos los datos de la aplicación en tiempo real. Gestiona productos, promociones,
              publicaciones y mucho más desde una interfaz intuitiva.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
            >
              <Link href="https://it-backend.es" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Acceder al Panel de Administración
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Project */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Trabajo de Fin de Grado</h2>
          <div className="bg-gray-800/70 rounded-lg p-8 border border-green-500/30">
            <GraduationCap className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              IT APP es el resultado de un proyecto académico integral que demuestra la aplicación práctica de
              conocimientos en desarrollo móvil, bases de datos, interfaces de usuario y arquitectura de software. El
              proyecto incluye documentación completa, análisis de requisitos y implementación técnica.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
            >
              <Link
                href="https://drive.google.com/drive/folders/14x83HiMIUt-mYQi2JUE9whGa3uOQsSeC?usp=drive_link"
                target="_blank"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Documentación del Proyecto
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Creator */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Sobre el Creador</h2>
          <div className="bg-gray-800/70 rounded-lg p-8 border border-green-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-white">Diego Hernández</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Desarrollador especializado en aplicaciones móviles y sistemas web. Apasionado por crear soluciones
              tecnológicas que mejoren la experiencia del usuario y optimicen los procesos empresariales. IT APP
              representa la culminación de años de estudio y dedicación en el campo del desarrollo de software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
              >
                <Link href="https://kabash.carrd.co" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Tarjeta Virtual
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
              >
                <Link href="https://www.linkedin.com/feed/" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
              >
                <Link href="https://kabash87.github.io/portfolio/" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 border-t border-green-500/30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Creative Commons */}
          <div className="mb-8 text-sm text-gray-400 leading-relaxed">
            <p className="mb-4">
              <Link href="https://creativecommons.org" className="text-green-400 hover:text-green-300">
                IT APP
              </Link>{" "}
              © 2025 by{" "}
              <Link href="https://creativecommons.org" className="text-green-400 hover:text-green-300">
                Diego Hernández
              </Link>{" "}
              is licensed under{" "}
              <Link
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                className="text-green-400 hover:text-green-300"
                target="_blank"
              >
                CC BY-NC-SA 4.0
              </Link>
              <span className="inline-flex items-center ml-2">
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                  alt="CC"
                  className="w-4 h-4 ml-1"
                />
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                  alt="BY"
                  className="w-4 h-4 ml-1"
                />
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
                  alt="NC"
                  className="w-4 h-4 ml-1"
                />
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
                  alt="SA"
                  className="w-4 h-4 ml-1"
                />
              </span>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 leading-relaxed border-t border-gray-800 pt-8">
            <p>
              Todos los logotipos, marcas y nombres comerciales mencionados en este documento son propiedad de sus
              respectivos titulares. Su inclusión se realiza únicamente con fines educativos y de identificación, y no
              implica respaldo, patrocinio ni asociación alguna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
