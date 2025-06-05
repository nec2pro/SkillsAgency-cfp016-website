'use client';

import Image from 'next/image';
import { AcademicCapIcon, LightBulbIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-[#d1d1d1]">
      {/* Separador superior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>

      <div className="min-h-screen bg-#d1d1d1">
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/oferta/oferta_formativa.png"
            alt="Nosotros"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosotros</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Conoce más sobre nuestra institución y nuestro equipo
              </p>
            </div>
          </div>
        </div>
      {/* Separador inferior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>
        <div className="container mx-auto px-4 py-12">
          {/* Nuestro Equipo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/team/directora.jpg"
                    alt="Directora"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Lic. María González</h3>
                  <p className="text-gray-600 font-medium mb-2">Directora</p>
                  <p className="text-gray-500">
                    Más de 20 años de experiencia en educación y gestión institucional
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/team/coordinador.jpg"
                    alt="Coordinador Académico"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Ing. Juan Pérez</h3>
                  <p className="text-gray-600 font-medium mb-2">Coordinador Académico</p>
                  <p className="text-gray-500">
                    Especialista en desarrollo curricular y gestión educativa
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/team/secretaria.jpg"
                    alt="Secretaria"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Sra. Ana Martínez</h3>
                  <p className="text-gray-600 font-medium mb-2">Secretaria</p>
                  <p className="text-gray-500">
                    Experta en gestión administrativa y atención al estudiante
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Nuestra Historia Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg mb-4">
                El Centro de Formación Profesional N°16 es una institución educativa comprometida con la excelencia 
                y la innovación en la formación profesional. Desde nuestra fundación, nos hemos dedicado a formar 
                profesionales altamente capacitados que contribuyan al desarrollo de la sociedad.
              </p>
              <p className="text-gray-600 text-lg">
                Nuestro compromiso con la calidad educativa y la actualización constante nos ha permitido 
                mantenernos a la vanguardia en la formación profesional, adaptándonos a las necesidades 
                cambiantes del mercado laboral.
              </p>
            </div>
          </section>

          {/* Misión y Visión Section */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-[#00ffd5] to-[#10b002] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Misión</h2>
              <p className="text-lg">
                Formar profesionales competentes y éticos, capaces de responder a las demandas del mercado 
                laboral actual, mediante programas educativos de calidad que promuevan el desarrollo 
                integral de nuestros estudiantes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#00ffd5] to-[#10b002] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Visión</h2>
              <p className="text-lg">
                Ser reconocidos como una institución líder en la formación profesional, destacando por 
                la excelencia académica, la innovación educativa y el compromiso con el desarrollo 
                profesional de nuestros estudiantes.
              </p>
            </div>
          </section>

          {/* Valores Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <AcademicCapIcon className="h-12 w-12 mx-auto mb-4 text-[#00ffd5]" />
                <h3 className="text-xl font-bold mb-2">Excelencia</h3>
                <p className="text-gray-600">
                  Buscamos la excelencia en todo lo que hacemos, desde la enseñanza hasta el servicio 
                  a nuestros estudiantes.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <LightBulbIcon className="h-12 w-12 mx-auto mb-4 text-[#00ffd5]" />
                <h3 className="text-xl font-bold mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Fomentamos la creatividad y la innovación en nuestros programas y metodologías de enseñanza.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <HeartIcon className="h-12 w-12 mx-auto mb-4 text-[#00ffd5]" />
                <h3 className="text-xl font-bold mb-2">Compromiso</h3>
                <p className="text-gray-600">
                  Nos comprometemos con el éxito de nuestros estudiantes y su desarrollo profesional.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4 text-[#00ffd5]" />
                <h3 className="text-xl font-bold mb-2">Integridad</h3>
                <p className="text-gray-600">
                  Actuamos con honestidad, transparencia y ética en todas nuestras acciones.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>
    </div>
  );
} 