'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AcademicCapIcon, BuildingOfficeIcon, UserGroupIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

type FilterType = 'trayectos' | 'capacitaciones' | 'enof' | 'terminalidad' | 'cursos'
type SedeType = 'bogota' | 'castanares'
type FamiliaType = 'informatica' | 'sanitarista' | 'electricista' | 'gasista'

interface Formacion {
  id: string
  title: string
  familia: FamiliaType
  sedes: SedeType[]
  image: string
  description: string
  tipo: FilterType
}

const formaciones: Formacion[] = [
  // Trayectos
  {
    id: 'electrico-industrial',
    title: 'Electricista Industrial',
    familia: 'electricista',
    sedes: ['castanares'],
    image: '/images/oferta/electricista_industrial.png',
    description: 'Especialización en sistemas eléctricos industriales y su mantenimiento.',
    tipo: 'trayectos'
  },
  {
    id: 'electrico-inmuebles',
    title: 'Electricista En Inmuebles',
    familia: 'electricista',
    sedes: ['castanares'],
    image: '/images/oferta/electricista_inmueble.png',
    description: 'Formación en instalaciones eléctricas para edificios y propiedades.',
    tipo: 'trayectos'
  },
  {
    id: 'gasista-domiciliario',
    title: 'Gasista Domiciliario',
    familia: 'gasista',
    sedes: ['castanares'],
    image: '/images/oferta/montador_gasista.png',
    description: 'Especialización en instalaciones de gas para viviendas.',
    tipo: 'trayectos'
  },
  {
    id: 'gasista-unifuncional',
    title: 'Gasista De unidades Unifuncionales',
    familia: 'gasista',
    sedes: ['castanares'],
    image: '/images/oferta/gasista_unifuncional.png',
    description: 'Formación en instalaciones de gas para unidades unifuncionales.',
    tipo: 'trayectos'
  },
  {
    id: 'electrico-renovable',
    title: 'Instalador De Sistemas Electricos De Energias Renovables',
    familia: 'electricista',
    sedes: ['castanares'],
    image: '/images/oferta/energias_renovables.png',
    description: 'Formación en instalación y mantenimiento de sistemas eléctricos con energías renovables.',
    tipo: 'trayectos'
  },
  {
    id: 'sanitarista',
    title: 'Instalador Sanitarista',
    familia: 'sanitarista',
    sedes: ['castanares'],
    image: '/images/oferta/instalador_sanitarista.png',
    description: 'Formación completa en instalaciones sanitarias y su mantenimiento.',
    tipo: 'trayectos'
  },
  {
    id: 'climatizacion',
    title: 'Instalador Y Reparador De Equipos De Climatizacion',
    familia: 'sanitarista',
    sedes: ['castanares'],
    image: '/images/oferta/reparador_climatizacion.png',
    description: 'Formación en instalación y reparación de sistemas de climatización.',
    tipo: 'trayectos'
  },
  {
    id: 'electrico-domiciliario',
    title: 'Montador Electricista Domiciliario',
    familia: 'electricista',
    sedes: ['castanares'],
    image: '/images/oferta/montador_electricista.png',
    description: 'Especialización en instalaciones eléctricas domiciliarias y su mantenimiento.',
    tipo: 'trayectos'
  },
  {
    id: 'sanitario-domiciliario',
    title: 'Montador De Instalaciones Sanitarias Domiciliarias',
    familia: 'sanitarista',
    sedes: ['castanares'],
    image: '/images/oferta/sanitarista_somiciliaria.png',
    description: 'Especialización en instalaciones sanitarias para viviendas.',
    tipo: 'trayectos'
  },
  {
    id: 'analista-datos',
    title: 'Operador Analista de Datos',
    familia: 'informatica',
    sedes: ['bogota'],
    image: '/images/oferta/analista_datos.png',
    description: 'Especialización en análisis y procesamiento de datos para la toma de decisiones empresariales.',
    tipo: 'trayectos'
  },
  {
    id: 'informatica',
    title: 'Operador de Informática para Administración y Gestión',
    familia: 'informatica',
    sedes: ['castanares'],
    image: '/images/oferta/operador_informatica.png',
    description: 'Formación en herramientas informáticas para la administración y gestión empresarial.',
    tipo: 'trayectos'
  },
  {
    id: 'programador',
    title: 'Programador',
    familia: 'informatica',
    sedes: ['bogota'],
    image: '/images/oferta/programador.png',
    description: 'Formación en desarrollo de software y programación de aplicaciones.',
    tipo: 'trayectos'
  },
  // Capacitaciones Laborales
  {
    id: 'gestion-datos',
    title: 'Operador-a en Gestión y Procesamiento de Datos',
    familia: 'informatica',
    sedes: ['bogota'],
    image: '/images/oferta/operador_gestion_datos.png',
    description: 'Capacitación en gestión y procesamiento eficiente de datos empresariales.',
    tipo: 'capacitaciones'
  },
  {
    id: 'testing',
    title: 'Testing de Aplicaciones',
    familia: 'informatica',
    sedes: ['bogota'],
    image: '/images/oferta/tester_aplicaciones.png',
    description: 'Formación en técnicas y herramientas para el testing de aplicaciones de software.',
    tipo: 'capacitaciones'
  },
  {
    id: 'marketing-digital',
    title: 'Operador en herramientas de Marketing Digital',
    familia: 'informatica',
    sedes: ['bogota'],
    image: '/images/oferta/marketing_digital.png',
    description: 'Capacitación en herramientas y estrategias de marketing digital.',
    tipo: 'capacitaciones'
  }
]

export default function OfertaFormativa() {
  const [selectedTypes, setSelectedTypes] = useState<FilterType[]>([])
  const [selectedSedes, setSelectedSedes] = useState<SedeType[]>([])
  const [selectedFamilias, setSelectedFamilias] = useState<FamiliaType[]>([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const toggleType = (type: FilterType) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const toggleSede = (sede: SedeType) => {
    setSelectedSedes(prev => 
      prev.includes(sede) 
        ? prev.filter(s => s !== sede)
        : [...prev, sede]
    )
  }

  const toggleFamilia = (familia: FamiliaType) => {
    setSelectedFamilias(prev => 
      prev.includes(familia) 
        ? prev.filter(f => f !== familia)
        : [...prev, familia]
    )
  }

  const filteredFormaciones = formaciones.filter(formacion => {
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(formacion.tipo)
    const matchesSede = selectedSedes.length === 0 || formacion.sedes.some(sede => selectedSedes.includes(sede))
    const matchesFamilia = selectedFamilias.length === 0 || selectedFamilias.includes(formacion.familia)
    return matchesType && matchesSede && matchesFamilia
  })

  const formacionesByType = filteredFormaciones.reduce((acc, formacion) => {
    if (!acc[formacion.tipo]) {
      acc[formacion.tipo] = []
    }
    acc[formacion.tipo].push(formacion)
    return acc
  }, {} as Record<FilterType, Formacion[]>)

  const FilterSection = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Filtros</h2>
      
      {/* Filtro por Tipo */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Tipo de Formación</h3>
        <div className="space-y-2">
          {['trayectos', 'capacitaciones', 'enof', 'terminalidad', 'cursos'].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type as FilterType)}
                onChange={() => toggleType(type as FilterType)}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="text-gray-700">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por Sede */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Sede</h3>
        <div className="space-y-2">
          {['bogota', 'castanares'].map((sede) => (
            <label key={sede} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSedes.includes(sede as SedeType)}
                onChange={() => toggleSede(sede as SedeType)}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="text-gray-700">Sede {sede.charAt(0).toUpperCase() + sede.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por Familia */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Familia Profesional</h3>
        <div className="space-y-2">
          {['informatica', 'sanitarista', 'electricista', 'gasista'].map((familia) => (
            <label key={familia} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFamilias.includes(familia as FamiliaType)}
                onChange={() => toggleFamilia(familia as FamiliaType)}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="text-gray-700">Familia {familia.charAt(0).toUpperCase() + familia.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/hero/oferta-formativa.jpg"
          alt="Oferta Formativa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Oferta Formativa</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Descubre todas nuestras opciones de formación profesional
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros - Móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="w-full bg-white p-4 rounded-xl shadow-lg flex items-center justify-between mb-4"
            >
              <span className="text-lg font-semibold">Filtros</span>
              <ChevronDownIcon 
                className={`h-6 w-6 transition-transform duration-200 ${isFiltersOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isFiltersOpen && <FilterSection />}
          </div>

          {/* Filtros - Desktop */}
          <div className="hidden lg:block w-80">
            <div className="sticky top-0">
              <FilterSection />
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="flex-1">
            {Object.entries(formacionesByType).map(([tipo, formaciones]) => (
              <div key={tipo} className="mb-12">
                <h2 className="text-3xl font-bold mb-8 capitalize">{tipo}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formaciones.map((formacion) => (
                    <div key={formacion.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48">
                        <Image
                          src={formacion.image}
                          alt={formacion.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{formacion.title}</h3>
                        <p className="text-gray-600 mb-4">
                          {formacion.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <BuildingOfficeIcon className="h-5 w-5" />
                            <span>{formacion.sedes.map(sede => sede.charAt(0).toUpperCase() + sede.slice(1)).join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <AcademicCapIcon className="h-5 w-5" />
                            <span>{formacion.familia.charAt(0).toUpperCase() + formacion.familia.slice(1)}</span>
                          </div>
                        </div>
                        <Link
                          href={`/oferta-formativa/${formacion.id}`}
                          className="block w-full text-center bg-gradient-to-r from-[#00ffd5] to-[#10b002] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                        >
                          Ver más
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 