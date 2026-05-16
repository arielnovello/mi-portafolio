function Cont() {
  return (
    // Separador de contenido Contacto
    <div className="flex flex-col items-center">
      {/* Contenedor del título con líneas */}
      <div className="flex items-center w-full max-w-5xl">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-slate-500"></div>

        {/* Texto Central */}
        <h2 className="mx-8 text-4xl text-white tracking-[0.3em] font-light uppercase">
          Contacto
        </h2>

        <div className="flex-1 h-px bg-linear-to-l from-transparent to-slate-500"></div>
      </div>

      {/* Contenedor de contacto (Grid 50/50 original, alineado arriba en PC) */}
      <div className="p-10 md:p-20 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        {/* LADO IZQUIERDO: Centrado en celular, vuelve a la izquierda y arriba en PC */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-6 px-5 text-center md:text-left text-slate-300">
            Información de Contacto
          </h3>

          {/* Mantiene los iconos alineados verticalmente entre sí */}
          <div className="flex flex-col items-start gap-5 px-5">
            <div className="flex gap-5 hover:text-blue-400 cursor-pointer">
              📧
              <p>arielnovello1@gmail.com</p>
            </div>
            <div className="flex gap-5 hover:text-blue-400 cursor-pointer">
              🔗
              <a href="#">LinkedIn /tu-perfil</a>
            </div>
            <div className="flex gap-5 hover:text-blue-400 cursor-pointer">
              💻
              <a href="#">GitHub /tu-usuario</a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto (Original e intacto) */}
        <form className="bg-slate-900/50 p-10 border border-slate-700 rounded-2xl">
          <label className="text-slate-400 text-sm tracking-widest">
            NOMBRE
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-slate-800 border py-3 px-4 border-slate-700 w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-slate-500 mt-2 mb-5"
            />
          </label>
          <label className="text-slate-400 text-sm tracking-widest">
            EMAIL
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="bg-slate-800 border py-3 px-4 border-slate-700 w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-slate-500 mt-2 mb-5"
            />
          </label>
          <label className="text-slate-400 text-sm tracking-widest">
            MENSAJE
            <textarea
              rows="4"
              placeholder="¿En que puedo ayudarte?"
              className="bg-slate-800 border py-3 px-4 border-slate-700 w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-slate-500 mt-2"
            />
          </label>
          <button
            type="submit"
            className="w-full mt-5 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 rounded-lg transition-all cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cont;
