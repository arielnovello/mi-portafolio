import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-1 w-full z-50 px-2">
      <div className="max-w-5xl mx-auto bg-slate-900/90 border border-slate-600 backdrop-blur rounded-sm p-3">
        {/* FILA PRINCIPAL */}
        <div className="flex items-center justify-between md:justify-center text-white uppercase tracking-wider">
          {/* MÓVIL: INICIO (Usa href) */}
          <a
            href="#inicio"
            className=" hover:text-blue-400 cursor-pointer md:hidden"
          >
            INICIO
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl px-2 cursor-pointer"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* PC: TODO CENTRADO (Todos usan href) */}
          <div className="hidden md:flex gap-20">
            <a href="#inicio" className="hover:text-blue-400 cursor-pointer">
              INICIO
            </a>
            <a
              href="#habilidades"
              className="hover:text-blue-400 cursor-pointer"
            >
              HABILIDADES
            </a>
            <a href="#proyectos" className="hover:text-blue-400 cursor-pointer">
              PROYECTOS
            </a>
            <a href="#contacto" className="hover:text-blue-400 cursor-pointer">
              CONTACTO
            </a>
          </div>
        </div>

        {/* MENÚ DESPLEGABLE CELULAR (Cerramos el menú con el onClick) */}
        {isOpen && (
          <div className="flex flex-col items-center gap-6 text-white pt-6 md:hidden">
            <a
              href="#habilidades"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 cursor-pointer"
            >
              HABILIDADES
            </a>
            <a
              href="#proyectos"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 cursor-pointer"
            >
              PROYECTOS
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 cursor-pointer"
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
