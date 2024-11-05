import "./App.css";
import Contact from "./components/Contact";
import ProfileContainer from "./components/Profilecontainer";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Objective from "./components/Objective";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <main className="container">
      <section className="left-section">
        <ProfileContainer />
        <Contact />
        <Skills />
        <Certificates />
      </section>
      <section className="description">
        <Objective />
        <Experience />
        <Projects />
        <Education />
      </section>
    </main>
  );
}

export default App;
