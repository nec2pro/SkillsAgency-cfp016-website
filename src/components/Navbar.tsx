'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  PhoneIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar la lógica de búsqueda aquí
    console.log('Buscando:', searchQuery)
  }

  return (
    <nav className="bg-gradient-to-r from-[#00ffd5] to-[#10b002] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/logo/logo.png"
                alt="Centro de Formación Profesional"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
                <HomeIcon className="h-5 w-5 mr-1 text-emerald-800" />
                Inicio
              </Link>
              <Link href="/oferta-formativa" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
                <BookOpenIcon className="h-5 w-5 mr-1 text-emerald-800" />
                Oferta Formativa
              </Link>
              <Link href="/preinscripcion" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
                <ClipboardDocumentIcon className="h-5 w-5 mr-1 text-emerald-800" />
                Preinscripción
              </Link>
              <Link href="/nosotros" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-1 text-emerald-800" />
                Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
                <PhoneIcon className="h-5 w-5 mr-1 text-emerald-800" />
                Contacto
              </Link>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block ml-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 px-4 py-1.5 text-sm rounded-full bg-white/50 text-white placeholder-white/90 focus:outline-none focus:bg-white/60"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-[#00ffd5] to-[#10b002] shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/"
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5 mr-2 text-emerald-800" />
                Inicio
              </Link>
              <Link
                href="/oferta-formativa"
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpenIcon className="h-5 w-5 mr-2 text-emerald-800" />
                Oferta Formativa
              </Link>
              <Link
                href="/preinscripcion"
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ClipboardDocumentIcon className="h-5 w-5 mr-2 text-emerald-800" />
                Preinscripción
              </Link>
              <Link
                href="/nosotros"
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserGroupIcon className="h-5 w-5 mr-2 text-emerald-800" />
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneIcon className="h-5 w-5 mr-2 text-emerald-800" />
                Contacto
              </Link>
            </div>

            {/* Mobile search bar */}
            <div className="px-4 py-3 border-t border-white/10">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 text-sm rounded-full bg-white/50 text-white placeholder-white/90 focus:outline-none focus:bg-white/60"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 