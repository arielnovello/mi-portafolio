function Main() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center p-12 md:p-30">
      {/* Texto izquierda */}
      <div className="text-center">
        <h1 className="text-orange-300 text-4xl md:text-5xl mb-2 mt-10 md:mt-0">
          Novello Ariel
        </h1>
        <h2 className="text-slate-300 text-xl md:text-2xl mb-6">
          Desarrollador de Software
        </h2>
        <div className="text-white space-y-4 md:text-lg max-w-2xl">
          <p>
            Hola, soy Ariel, tengo 21 años y actualmente curso el tercer año de
            la carrera de
            <strong> Técnico Superior en Desarrollo de Software</strong> en el
            Instituto Superior N° 46 "Domingo Guzmán Silva". Me encuentro
            desarrollando mis habilidades técnicas y aprendiendo distintas
            herramientas de programación.
          </p>
          <p>
            Mi objetivo es obtener mi primera experiencia profesional, aportando
            mis conocimientos y continuando mi crecimiento en el mundo del
            desarrollo de software, tanto en Frontend como en Backend.
          </p>
        </div>
        {/* Redes sociales */}
        <div className="flex gap-5 mt-8 justify-center items-center">
          <a
            href="https://github.com/arielnovello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github.svg"
              alt="GitHub"
              className="h-12 w-12 hover:scale-125 transition-all cursor-pointer"
            />
          </a>
          <a
            href="https://linkedin.com/in/arielnovello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linkedin.svg"
              alt="LinkedIn"
              className="h-12 w-12 hover:scale-125 transition-all cursor-pointer"
            />
          </a>
          <a
            href="cv_arielnovello.pdf"
            download="cv_arielnovello.pdf"
            className="h-12 px-5 bg-slate-900/50 text-white border border-slate-600 rounded-xl flex items-center justify-center font-medium text-sm gap-2 hover:scale-105 hover:bg-slate-700 transition-all cursor-pointer"
          >
            <span>📄</span> Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
