import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Features from "./components/Features.jsx";
import Stats from "./components/Stats.jsx";
import Process from "./components/Process.jsx";
import Clients from "./components/Clients.jsx";
import Careers from "./components/Careers.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Stats />
        <Process />
        <Clients />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
