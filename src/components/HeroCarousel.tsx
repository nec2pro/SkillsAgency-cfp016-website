'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: 'Formación Profesional de Calidad',
    description: 'Preparate para el futuro con nuestros programas actualizados y profesores expertos',
    image: '/images/hero-1.jpg',
    cta: 'Conocé nuestros cursos',
    link: '/oferta-formativa'
  },
  {
    id: 2,
    title: 'Aprende Haciendo',
    description: 'Metodología práctica que te prepara para el mundo laboral real',
    image: '/images/hero-2.jpg',
    cta: 'Descubrí más',
    link: '/nosotros'
  },
  {
    id: 3,
    title: 'Inscripciones Abiertas',
    description: '¡No pierdas la oportunidad de formarte en lo que te apasiona!',
    image: '/images/hero-3.jpg',
    cta: 'Inscribite ahora',
    link: '/preinscripcion'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-block bg-gradient-to-r from-[#00ffd5] to-[#10b002] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 