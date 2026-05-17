function Hab() {
  return (
    // Separador de contenido Habilidades con padding responsivo
    <div className="flex flex-col items-center px-4 py-10 w-full">
      {/* Contenedor del título con líneas (Mejorado para móviles) */}
      <div className="flex items-center w-full max-w-5xl mb-6">
        {/* Línea izquierda */}
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-slate-500"></div>

        {/* Texto Central Responsivo */}
        <h2 className="mx-4 md:mx-8 text-2xl md:text-4xl text-white tracking-[0.2em] md:tracking-[0.3em] font-light uppercase text-center">
          Habilidades
        </h2>

        {/* Línea derecha */}
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-slate-500"></div>
      </div>

      {/* Contenedor de Bloques Habilidades */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl p-4 md:p-10">
        {/* Habilidades Duras (Tecnologías) */}
        <div className="flex flex-col items-center border border-slate-600 rounded-xl bg-slate-900/50 w-full overflow-hidden">
          <h1 className="flex justify-center text-2xl md:text-4xl text-slate-300 font-light py-6 md:py-10 bg-slate-900 w-full text-center border-b border-slate-600">
            Tecnologías
          </h1>
          {/* Grilla: 2 columnas en móviles, 3 en pantallas medianas en adelante */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 p-6 md:p-10 text-white font-light w-full justify-items-center">
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="c++.svg"
                alt="C++"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1">C++</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="HTML.svg"
                alt="HTML"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1">HTML</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="CSS.svg"
                alt="CSS"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1">CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="git.svg"
                alt="Git"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1 wrap-break-word max-w-25">
                Git/GitHub
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="react.png"
                alt="React"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1">React</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="tailwind.svg"
                alt="Tailwind"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1 wrap-break-word max-w-25">
                TailwindCSS
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="java.svg"
                alt="Java"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1 wrap-break-word max-w-25">
                Java(curso)
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center">
              <img
                src="vscode.svg"
                alt="VScode"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-sm md:text-base mt-1">VScode</p>
            </span>
          </div>
        </div>

        {/* Habilidades Blandas (Personales) */}
        <div className="flex flex-col items-center border border-slate-600 rounded-xl bg-slate-900/50 w-full overflow-hidden">
          <h1 className="flex justify-center text-2xl md:text-4xl text-slate-300 font-light py-6 md:py-10 bg-slate-900 w-full text-center border-b border-slate-600">
            Habilidades Personales
          </h1>
          {/* Grilla balanceada para textos largos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 p-6 md:p-10 text-white font-light w-full justify-items-center">
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center max-w-30">
              <img
                src="Comunicacion.png"
                alt="Comunicación"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-xs md:text-sm mt-1 leading-tight">
                Comunicación efectiva con personas no técnicas
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center max-w-30">
              <img
                src="engranaje.png"
                alt="Resolución"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-xs md:text-sm mt-1 leading-tight">
                Resolución de Problemas
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center max-w-30">
              <img
                src="libro.png"
                alt="Aprendizaje"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-xs md:text-sm mt-1 leading-tight">
                Aprendizaje Rápido / Autodidacta
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center max-w-30">
              <img
                src="equipo.png"
                alt="Equipo"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-xs md:text-sm mt-1 leading-tight">
                Trabajo en Equipo
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center max-w-30">
              <img
                src="camaleon.png"
                alt="Adaptabilidad"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-xs md:text-sm mt-1 leading-tight">
                Adaptabilidad rápida
              </p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-110 md:hover:scale-125 transition-all cursor-pointer text-center max-w-30">
              <img
                src="tareas.png"
                alt="Tareas"
                className="h-12 w-12 md:h-15 md:w-15 object-contain"
              />
              <p className="text-xs md:text-sm mt-1 leading-tight">
                Organización de tareas
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hab;
