function Main() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-10 gap-10 md:p-20">
      {/* Texto izquierda */}
      <div className="text-center md:text-left">
        <h1 className="text-orange-300 text-4xl md:text-5xl mb-2">
          Novello Ariel
        </h1>
        <h2 className="text-slate-300 text-xl md:text-2xl mb-6">
          Desarrollador de Software
        </h2>
        <div className="text-white space-y-4 md:text-lg max-w-2xl">
          <p>
            Me encuentro estudiando la carrera de{" "}
            <strong>Técnico Superior en Desarrollo de Software</strong> en el
            Instituto Superior N° 46 "Domingo Guzmán Silva". Actualmente curso
            el tercer año de mi formación, donde disfruto transformando la
            teoría en proyectos prácticos y funcionales.
          </p>
          <p>
            Mi objetivo actual es dar mis primeros pasos en el mundo IT, en
            busca de mi primera experiencia profesional donde pueda aportar mis
            conocimientos y seguir creciendo como desarrollador.
          </p>
        </div>
        {/* Redes sociales */}
        <div className="flex gap-5 mt-8 justify-center md:justify-start items-center">
          <img
            src="github.svg"
            alt="GitHub"
            className="h-12 w-12 hover:scale-125 transition-all cursor-pointer"
          />
          <img
            src="linkedin.svg"
            alt="LinkedIn"
            className="h-12 w-12 hover:scale-125 transition-all cursor-pointer"
          />
          <a
            href="CV.pdf"
            download="CV.pdf"
            alt="Descargar CV"
            className="h-12 px-5 bg-slate-800 text-white border border-slate-600 rounded-xl flex items-center justify-center font-medium text-sm gap-2 hover:scale-105 hover:bg-slate-700 transition-all cursor-pointer"
          >
            <span>📄</span> Descargar CV
          </a>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="flex flex-col items-center gap-2 md:-mt-18 mt-18">
        <img
          className="rounded-full h-54 w-54 border-5 border-slate-400"
          src="perfil.png"
          alt="Novello Ariel"
        />
        {/* Texto debajo de la imaǵen */}
        <div className="flex items-center gap-1 text-white text-sm">
          <span>🇦🇷</span>
          <span>Arroyo Leyes, Santa fe</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
