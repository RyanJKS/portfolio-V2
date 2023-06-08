import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { Home, About, Projects, Skills, Contact, Footer } from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
