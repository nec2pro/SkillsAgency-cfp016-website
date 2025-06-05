export default function Nosotros() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Nosotros</h1>
      
      <div className="grid gap-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            El Centro de Formación Profesional N°16 es una institución educativa comprometida con la excelencia 
            y la innovación en la formación profesional. Desde nuestra fundación, nos hemos dedicado a formar 
            profesionales altamente capacitados que contribuyan al desarrollo de la sociedad.
          </p>
          <p className="text-gray-600">
            Nuestro compromiso con la calidad educativa y la actualización constante nos ha permitido 
            mantenernos a la vanguardia en la formación profesional, adaptándonos a las necesidades 
            cambiantes del mercado laboral.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Misión y Visión</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Misión</h3>
              <p className="text-gray-600">
                Formar profesionales competentes y éticos, capaces de responder a las demandas del mercado 
                laboral actual, mediante programas educativos de calidad que promuevan el desarrollo 
                integral de nuestros estudiantes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como una institución líder en la formación profesional, destacando por 
                la excelencia académica, la innovación educativa y el compromiso con el desarrollo 
                profesional de nuestros estudiantes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Buscamos la excelencia en todo lo que hacemos, desde la enseñanza hasta el servicio 
                a nuestros estudiantes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Innovación</h3>
              <p className="text-gray-600">
                Fomentamos la creatividad y la innovación en nuestros programas y metodologías de enseñanza.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Compromiso</h3>
              <p className="text-gray-600">
                Nos comprometemos con el éxito de nuestros estudiantes y su desarrollo profesional.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y ética en todas nuestras acciones.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 mb-4">
            Contamos con un equipo de profesionales altamente calificados y comprometidos con la 
            educación. Nuestros docentes combinan experiencia práctica con formación académica, 
            lo que permite ofrecer una educación integral y actualizada.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-lg font-medium">Directora</h3>
              <p className="text-gray-600">Lic. María González</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-lg font-medium">Coordinador Académico</h3>
              <p className="text-gray-600">Ing. Juan Pérez</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-lg font-medium">Secretaria</h3>
              <p className="text-gray-600">Sra. Ana Martínez</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 