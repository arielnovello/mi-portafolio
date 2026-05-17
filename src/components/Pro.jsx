function Pro() {
  return (
    // Separador de contenido Proyectos con padding responsivo
    <div className="flex flex-col items-center px-4 py-10 w-full">
      {/* Contenedor del título con líneas (Optimizado para móviles) */}
      <div className="flex items-center w-full max-w-5xl mb-6">
        {/* Línea izquierda */}
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-slate-500"></div>

        {/* Texto Central Responsivo */}
        <h2 className="mx-4 md:mx-8 text-2xl md:text-4xl text-white tracking-[0.2em] md:tracking-[0.3em] font-light uppercase text-center">
          Proyectos
        </h2>

        {/* Línea derecha */}
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-slate-500"></div>
      </div>

      {/* Contenedor de proyectos */}
      <div className="max-w-6xl w-full p-4 md:p-10">
        <div className="border border-slate-700 rounded-2xl overflow-hidden flex flex-col md:flex-row bg-slate-900/30 items-center md:items-stretch">
          {/* Imagen del proyecto (Expandida para PC) */}
          <div className="w-full md:w-[45%] bg-slate-900/50 p-6 md:p-8 flex justify-center items-center border-b md:border-b-0 md:border-r border-slate-700">
            <img
              src="proyecto.png"
              alt="Proyecto"
              className="hover:scale-105 transition-all rounded-lg w-full h-auto object-contain max-w-100 md:max-w-full"
            />
          </div>

          {/* Contenido descriptivo del proyecto */}
          <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-slate-300 text-2xl md:text-3xl font-semibold text-center mb-4 tracking-wide">
              GESTIÓN DE NETBOOKS
            </h3>
            <p className="text-white mb-6 text-center md:text-left text-sm md:text-base leading-relaxed">
              Software desarrollado en C++ diseñado para la gestión y
              administración interna de equipos informáticos. El sistema
              implementa{" "}
              <strong>
                persistencia de datos mediante el manejo de archivos
              </strong>
              , control y registro de préstamos, y una estructura de
              validaciones robustas para asegurar la consistencia de la
              información.
            </p>

            {/* Etiquetas (Tags) */}
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                C++
              </span>
              <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                Manejo de Archivos (fstream)
              </span>
              <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                Validaciones Robustas
              </span>
            </div>

            {/* Botón para ver código en GitHub */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/arielnovello/tp-prestacion-netbooks"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all text-sm shadow-md"
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
