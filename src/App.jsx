import "./assets/css/main.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
