function Pro() {
  return (
    // Separador de contenido Proyectos
    <div className="flex flex-col items-center">
      {/* Contenedor del título con líneas */}
      <div className="flex items-center w-full max-w-5xl">
        {/* Línea izquierda (degradado de transparente a blanco) */}
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-slate-500"></div>

        {/* Texto Central */}
        <h2 className="mx-8 text-4xl text-white tracking-[0.3em] font-light uppercase">
          Proyectos
        </h2>

        {/* Línea derecha (degradado de blanco a transparente) */}
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-slate-500"></div>
      </div>

      {/* Contenedor de proyectos */}
      <div className="max-w-6xl w-full p-10 md:p-20">
        <div className="border border-slate-700 rounded-2xl overflow-hidden flex flex-col md:flex-row ">
          <div className="md:w-1/2 bg-slate-900/50 p-6 flex justify-center">
            <img
              src="proyecto.png"
              alt="Proyecto"
              className="hover:scale-105 transition-all rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-slate-300 text-3xl font-semibold text-center mb-4">
              GESTIÓN DE NETBOOKS
            </h3>
            <p className="text-white mb-6 text-center md:text-left">
              Software desarrollado en C++ para la administración de equipos.
              Implementa <strong>persistencia de datos en archivos</strong>,
              control de préstamos en tiempo real y validaciones lógicas para
              asegurar la integridad de la información.
            </p>
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs">
                C++
              </span>
              <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs">
                Manejo de Archivos (Fstream)
              </span>
              <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs">
                Validaciones Robustas
              </span>
            </div>
            {/* Botón para ver código en GitHub */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/arielnovello/tp-prestacion-netbooks"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all"
              >
                Ver Código en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pro;
