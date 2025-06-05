'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BuildingOfficeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// This would typically come from an API or database
const trainingPaths = {
  'programador': {
    title: "TRAYECTO FORMATIVO",
    role: "Programador",
    description: `El programador diseña soluciones completas, desarrolla funciones específicas y se asegura de que el producto final sea funcional y fácil de usar. Parte de esta responsabilidad incluye: Crear nuevas funciones o módulos dentro de una aplicación. Tiene como finalidad poder desarrollar requerimientos técnicos propios de las empresas, codificándolo con buenas prácticas y también poder optimizar y mantener código ya creado`,
    modules: [
      "Técnicas de Programación",
      "Base de Datos",
      "Programación Orientada a Objetos",
      "Relaciones Laborales"
    ],
    duration: "Anual",
    schedule: "de Lunes a Jueves de 09:00 a 12:00 hs.",
    startDate: "17/03/25",
    endDate: "04/12/25",
    sede: "Bogotá",
    location: {
      address: "Av. Example 123",
      city: "Ciudad Autónoma de Buenos Aires",
      coordinates: {
        lat: -34.6037,
        lng: -58.3816
      }
    },
    image: "/images/oferta/programador.png",
    familia: "Informática"
  }
};

const TrainingPathDetail = () => {
  const params = useParams();
  const id = params.id as string;
  const trainingPath = trainingPaths[id as keyof typeof trainingPaths];

  if (!trainingPath) {
    return (
      <div className="min-h-screen bg-[#d1d1d1] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trayecto no encontrado</h1>
          <Link 
            href="/oferta-formativa"
            className="text-blue-600 hover:text-blue-800"
          >
            Volver a la oferta formativa
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Image */}
        <div className="relative h-[40vh] min-h-[300px] mb-12 rounded-xl overflow-hidden">
          <Image
            src={trainingPath.image}
            alt={trainingPath.role}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-2">{trainingPath.title}</h1>
              <h2 className="text-3xl">{trainingPath.role}</h2>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Descripción del Rol</h3>
          <p className="text-gray-700 whitespace-pre-line">{trainingPath.description}</p>
        </div>

        {/* Modules */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Módulos del Trayecto</h3>
          <p className="text-gray-700 mb-4">El trayecto se compone de {trainingPath.modules.length} módulos:</p>
          <ul className="list-disc list-inside space-y-2">
            {trainingPath.modules.map((module, index) => (
              <li key={index} className="text-gray-700">{module}</li>
            ))}
          </ul>
        </div>

        {/* Schedule and Duration */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Información del Curso</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">DURACIÓN</p>
              <p className="text-gray-700">{trainingPath.duration}</p>
            </div>
            <div>
              <p className="font-semibold">DÍAS Y HORARIOS</p>
              <p className="text-gray-700">{trainingPath.schedule}</p>
            </div>
            <div>
              <p className="font-semibold">INICIO Y FIN</p>
              <p className="text-gray-700">del {trainingPath.startDate} al {trainingPath.endDate}</p>
            </div>
            <div>
              <p className="font-semibold">SEDE</p>
              <p className="text-gray-700">{trainingPath.sede}</p>
            </div>
          </div>
        </div>

        {/* Registration */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">¡Inscripciones Abiertas!</h3>
          <p className="text-gray-700 mb-6">Inscribite haciendo click acá:</p>
          <Link 
            href="/preinscripcion" 
            className="inline-block bg-gradient-to-r from-[#00ffd5] to-[#10b002] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            INSCRIBITE
          </Link>
        </div>

        {/* Location */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Ubicación</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895464!2d${trainingPath.location.coordinates.lng}!3d${trainingPath.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjInNTMuNiJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-gray-700">{trainingPath.location.address}</p>
          <p className="text-gray-700">{trainingPath.location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingPathDetail; 