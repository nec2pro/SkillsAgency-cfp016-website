'use client'

import { useState } from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'
import Swal from 'sweetalert2'
import Link from 'next/link'
import Image from 'next/image'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSocialMediaClick = (platform: string) => {
    if (platform === 'youtube' || platform === 'twitter') {
      Swal.fire({
        title: '¡Próximamente!',
        text: `Estamos trabajando en nuestra cuenta de ${platform}. ¡Vuelve pronto!`,
        icon: 'info',
        confirmButtonText: 'Entendido'
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#d1d1d1]">
      {/* Separador superior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/contactos/contactos.jpg"
          alt="Contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envianos un mensaje o visitá nuestras sedes.
            </p>
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Mapa y Ubicación */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Sedes */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sede Bogotá</h2>
            <div className="aspect-[16/9] mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3021862946757!2d-58.4412!3d-34.6227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBogot%C3%A1%20115%2C%20C1414%20CABA!5e0!3m2!1ses-419!2sar!4v1647881234567!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">Bogotá 115 CABA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">4983-4646</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:cfp.n16@bue.edu.ar" className="text-emerald-600 hover:text-emerald-700">
                    cfp.n16@bue.edu.ar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sede Castañares */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sede Castañares</h2>
            <div className="aspect-[16/9] mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1234567890123!2d-58.4567!3d-34.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd1234567890%3A0xabcdef1234567890!2sAv.%20Casta%C3%B1ares%202650%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1647881234567!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">Av. Varela 1835 CABA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">113412-0547</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:cfp.n16@bue.edu.ar" className="text-emerald-600 hover:text-emerald-700">
                    cfp.n16@bue.edu.ar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales y Más Info */}
        <div className="bg-gradient-to-r from-[#00ffd5] to-[#10b002] p-6 rounded-xl shadow-lg mb-12 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Redes Sociales */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Seguinos</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/cfp.16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/cfp16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/cfp.16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <button
                  onClick={() => handleSocialMediaClick('youtube')}
                  className="hover:text-white/80 transition-colors"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialMediaClick('twitter')}
                  className="hover:text-white/80 transition-colors"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Más Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Más Info</h2>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="group relative">
                  <Link href="/" className="hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                      <img src="/images/logo/logo_fondo_claro.png" alt="CFP N°16" className="h-14 w-auto object-contain" />
                    </div>
                  </Link>
                </div>
                <div className="group relative">
                  <a
                    href="https://itlm.org.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                      <img src="/images/logo/logo_itlm.png" alt="ITLM" className="h-14 w-auto" />
                    </div>
                  </a>
                </div>
                <div className="group relative">
                  <a
                    href="https://sgbatos.org.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                      <img src="/images/logo/logo_sgbatos.png" alt="SGBATOS" className="h-14 w-auto" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00ffd5] to-[#10b002] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
      {/* Separador inferior */}
      <div className="h-1 bg-gradient-to-r from-[#00ffd5] to-[#10b002]"></div>
    </div>
  )
} 