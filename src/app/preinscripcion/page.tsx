"use client";

import Image from "next/image";

export default function Preinscripcion() {
  return (
    <div className="min-h-screen bg-[#d1d1d1]">
      {/* Separador superior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>

      <div className="min-h-screen bg-[#d1d1d1]">
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/oferta/oferta_formativa.png"
            alt="Preinscripción"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Preinscripción
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Inicia tu camino hacia el éxito profesional
              </p>
            </div>
          </div>
        </div>
        {/* Separador inferior */}
        <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffd5] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffd5] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffd5] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="curso"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Curso de interés
                </label>
                <select
                  id="curso"
                  name="curso"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffd5] focus:border-transparent"
                  required
                >
                  <option value="">Seleccione un curso</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="python">Programación Python</option>
                  <option value="diseno">Diseño Gráfico</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffd5] focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00ffd5] to-[#10b002] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
              >
                Enviar preinscripción
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>
    </div>
  );
}
