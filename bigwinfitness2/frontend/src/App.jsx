import './App.css'
import HeroBanner from './components/HeroBanner'
import CarouselSection from './components/Carousel'
import Section from './components/Section'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar>
        <HeroBanner/>
        <CarouselSection/>
        <Section/>
      </NavBar>
    </>
  )
}

export default App
