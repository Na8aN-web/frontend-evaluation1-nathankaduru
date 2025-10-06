import Navbar from './layout/Navbar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import About from './components/About'
import Work from './components/Work'
import LogoSlider from './components/LogoSlider'
import Projects from './components/Projects'
import Awards from './components/Awards'
import BrandCarousel from './components/BrandCarousel'
import Footer from './layout/Footer'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Showreel />
     <About />
     <Work />
     <LogoSlider />
     <Projects />
     <Awards />
     <BrandCarousel />
     <Footer />
    </>
  )
}

export default App
