'use client'

import Link from 'next/link'
import { useState } from 'react'
import Swal from 'sweetalert2'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para suscribir al newsletter
    Swal.fire({
      title: '¡Gracias por suscribirte!',
      text: 'Te mantendremos informado sobre nuestras novedades.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
    setEmail('')
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Links Internos */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/oferta-formativa" className="hover:text-emerald-400 transition-colors">
                  Oferta Formativa
                </Link>
              </li>
              <li>
                <Link href="/preinscripcion" className="hover:text-emerald-400 transition-colors">
                  Preinscripción
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-emerald-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Suscríbete para recibir nuestras novedades</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00ffd5] to-[#10b002] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Redes Sociales y Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Seguinos</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/cfp.16/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/cfp16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/cfp.16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <button
                onClick={() => handleSocialMediaClick('youtube')}
                className="hover:text-emerald-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
              <button
                onClick={() => handleSocialMediaClick('twitter')}
                className="hover:text-emerald-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold">Más Info</h4>
                <Link href="/preguntas-frecuentes" className="hover:text-emerald-400 transition-colors">
                  <QuestionMarkCircleIcon className="h-7 w-7" />
                </Link>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex space-x-4">
                  <div className="group relative">
                    <Link href="/" className="hover:text-emerald-400 transition-colors">
                      <img src="/images/logo/logo_fondo_claro.png" alt="CFP N°16" className="h-10 w-auto object-contain" />
                    </Link>
                  </div>
                  <div className="group relative">
                    <a
                      href="https://itlm.org.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      <img src="/images/logo/logo_itlm.png" alt="ITLM" className="h-10 w-auto" />
                    </a>
                  </div>
                  <div className="group relative">
                    <a
                      href="https://sgbatos.org.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      <img src="/images/logo/logo_sgbatos.png" alt="SGBATOS" className="h-10 w-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ubicaciones */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Sede Bogotá */}
              <div>
                <h4 className="text-xl font-bold mb-1">Sede Bogotá</h4>
                <p className="text-sm text-gray-400 mb-2">Caballito - CABA</p>
                <div className="aspect-[16/9] h-24 mb-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.988684716516!2d-58.38375908477036!3d-34.60473888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sBogot%C3%A1%20115%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1647881234567!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-1.5 text-xs">
                  <p className="flex items-center">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    <span className="font-semibold mr-1">Dirección:</span>
                    Bogotá 115 CABA
                  </p>
                  <p className="flex items-center">
                    <EnvelopeIcon className="h-3 w-3 mr-1" />
                    <span className="font-semibold mr-1">Email:</span>
                    cfp.n16@bue.edu.ar
                  </p>
                  <p className="flex items-center">
                    <PhoneIcon className="h-3 w-3 mr-1" />
                    <span className="font-semibold mr-1">Teléfono:</span>
                    4983-4646
                  </p>
                </div>
              </div>

              {/* Sede Castañares */}
              <div>
                <h4 className="text-xl font-bold mb-1">Sede Castañares</h4>
                <p className="text-sm text-gray-400 mb-2">Bajo Flores - CABA</p>
                <div className="aspect-[16/9] h-24 mb-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.988684716516!2d-58.38375908477036!3d-34.60473888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sAv.%20Varela%201835%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1647881234567!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-1.5 text-xs">
                  <p className="flex items-center">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    <span className="font-semibold mr-1">Dirección:</span>
                    Av. Varela 1835
                  </p>
                  <p className="flex items-center">
                    <EnvelopeIcon className="h-3 w-3 mr-1" />
                    <span className="font-semibold mr-1">Email:</span>
                    cfp.n16@bue.edu.ar
                  </p>
                  <p className="flex items-center">
                    <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="font-semibold mr-1">WhatsApp:</span>
                    113412-0547
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <img src="/images/logo/logo_white.png" alt="CFP N°16" className="h-10 w-auto opacity-60" />
            <span>&copy; {new Date().getFullYear()} CFP N°16. Todos los derechos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  )
} 