import Nav from "./components/Nav";
import Main from "./components/Main";
import Hab from "./components/Hab";
import Pro from "./components/Pro";
import Cont from "./components/Cont";

function App() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Nav />
      <section id="inicio">
        <Main />
      </section>
      <section id="habilidades">
        <Hab />
      </section>
      <section id="proyectos">
        <Pro />
      </section>
      <section id="contacto">
        <Cont />
      </section>
    </div>
  );
}

export default App;
