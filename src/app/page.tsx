import HeroCarousel from '@/components/HeroCarousel'
import Image from 'next/image'
import Link from 'next/link'
import {
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      
      {/* Programas Section */}
      <section className="py-16 bg-gradient-to-r from-[#268FCD] to-[#5DA24A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Trayectos */}
            <div className="relative h-32 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/cards/trayectos.jpg"
                alt="Trayectos"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center px-4 transition-colors duration-300 group-hover:text-emerald-400">Trayectos</h3>
              </div>
            </div>

            {/* Capacitaciones Laborales */}
            <div className="relative h-32 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/cards/capacitaciones.jpg"
                alt="Capacitaciones Laborales"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center px-4 transition-colors duration-300 group-hover:text-emerald-400">Capacitaciones Laborales</h3>
              </div>
            </div>

            {/* ENOF */}
            <div className="relative h-32 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/cards/enof.jpg"
                alt="Cursos (ENOF)"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center px-4 transition-colors duration-300 group-hover:text-emerald-400">Cursos (ENOF)</h3>
              </div>
            </div>

            {/* Terminalidad */}
            <div className="relative h-32 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/cards/terminalidad.jpg"
                alt="Terminalidad Primaria y Secundaria"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center px-4 transition-colors duration-300 group-hover:text-emerald-400">Terminalidad Primaria y Secundaria</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ofrecemos una formación de calidad con las mejores herramientas y profesionales para tu desarrollo
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AcademicCapIcon className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Profesores Expertos</h3>
              <p className="text-gray-600">
                Nuestro equipo docente está compuesto por profesionales con amplia experiencia en sus respectivos campos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ClockIcon className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Programas Actualizados</h3>
              <p className="text-gray-600">
                Mantenemos nuestros contenidos al día con las últimas tendencias y tecnologías del mercado.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <UserGroupIcon className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexibilidad</h3>
              <p className="text-gray-600">
                Ofrecemos horarios flexibles y modalidades de estudio adaptadas a tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#268FCD] to-[#5DA24A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <BuildingOfficeIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Años de Experiencia</div>
            </div>
            <div>
              <UserGroupIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Estudiantes Formados</div>
            </div>
            <div>
              <AcademicCapIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Trayectos formativos</div>
            </div>
            <div>
              <BriefcaseIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Capacitaciones laborales</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Inscríbete hoy y da el primer paso hacia tu futuro profesional. Nuestro equipo está listo para ayudarte a alcanzar tus metas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preinscripcion"
              className="bg-gradient-to-r from-[#268FCD] to-[#5DA24A] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Inscríbete Ahora
            </Link>
            <Link
              href="/contacto"
              className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 