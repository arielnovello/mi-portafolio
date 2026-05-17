import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 w-full z-50 px-4 md:px-10">
      {/* Sincronizado a max-w-6xl para que encaje perfecto con las tarjetas */}
      <div className="max-w-6xl mx-auto bg-slate-900/90 border border-slate-700/60 backdrop-blur rounded-lg p-4 shadow-2xl">
        {/* FILA PRINCIPAL */}
        <div className="flex items-center justify-between md:justify-center text-white uppercase tracking-widest font-light text-sm">
          {/* MÓVIL: INICIO (Usa href) */}
          <a
            href="#inicio"
            className="hover:text-blue-400 cursor-pointer md:hidden font-medium"
          >
            INICIO
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl px-2 cursor-pointer transition-transform duration-200 active:scale-90"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* PC: TODO CENTRADO Y ALINEADO CON EL CONTENIDO */}
          <div className="hidden md:flex gap-16 lg:gap-24">
            <a
              href="#inicio"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              INICIO
            </a>
            <a
              href="#habilidades"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              HABILIDADES
            </a>
            <a
              href="#proyectos"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              PROYECTOS
            </a>
            <a
              href="#contacto"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              CONTACTO
            </a>
          </div>
        </div>

        {/* MENÚ DESPLEGABLE CELULAR */}
        {isOpen && (
          <div className="flex flex-col items-center gap-6 text-white pt-6 md:hidden border-t border-slate-800 mt-4">
            <a
              href="#habilidades"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 cursor-pointer text-base"
            >
              HABILIDADES
            </a>
            <a
              href="#proyectos"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 cursor-pointer text-base"
            >
              PROYECTOS
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 cursor-pointer text-base"
            >
              CONTACTO
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
