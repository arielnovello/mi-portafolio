function Hab() {
  return (
    // Separador de contenido Habilidades
    <div className="flex flex-col items-center">
      {/* Contenedor del título con líneas */}
      <div className="flex items-center w-full max-w-5xl">
        {/* Línea izquierda (degradado de transparente a blanco) */}
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-slate-500"></div>

        {/* Texto Central */}
        <h2 className="mx-8 text-4xl text-white tracking-[0.3em] font-light uppercase">
          Habilidades
        </h2>

        {/* Línea derecha (degradado de blanco a transparente) */}
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-slate-500"></div>
      </div>

      {/* Habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl p-10 md:p-20">
        {/* Habilidades Duras */}
        <div className="flex flex-col items-center">
          <h1 className="flex justify-center text-3xl  text-slate-300 font-light">
            Habilidades Duras
          </h1>
          <div className="grid grid-cols-3 text-xl gap-20 p-10 text-white font-light">
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="c++.svg" alt="Logo" className="h-15 w-15" />
              <p>C++</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="HTML.svg" alt="Logo" className="h-15 w-15" />
              <p>HTML</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div className="flex flex-col items-center">
          <h1 className="flex justify-center text-3xl text-slate-300 font-light">
            Habilidades Blandas
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 text-sm gap-20 p-10 text-white font-light text-center">
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="Comunicacion.png" alt="Logo" className="h-15 w-15" />
              <p>Comunicación efectiva con personas no técnicas</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="HTML.svg" alt="Logo" className="h-15 w-15" />
              <p>HTML</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
            <span className="flex flex-col items-center gap-2 hover:scale-125 transition-all cursor-pointer">
              <img src="CSS.svg" alt="Logo" className="h-15 w-15" />
              <p>CSS</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hab;
