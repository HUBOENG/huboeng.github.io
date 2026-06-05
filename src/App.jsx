import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Features from './components/Features.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import Clients from './components/Clients.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

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
        <Contact />
      </main>
      <Footer />
    </>
  )
}
