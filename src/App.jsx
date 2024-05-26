
import './App.css'
import Consulta from './components/consulta/Consulta'
import Description from './components/description/Description'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Quote from './components/ourServices/Quote'
import Services from './components/ourServices/Services'
import Video from './components/ourServices/Video'
import ProyectGallery from './components/proyects/ProyectGallery'



function App() {


  return (
    <>
      <div className='font-abc'>
        <section id='header'>
          <Header/>
        </section>
        <section id='aboutUs'>
          <Hero/>
        </section>
        <Description/>
        <section id="services">
          <Services />
        </section>
        <Video/>
        <Quote/>
        <section id='proyects'>
          <ProyectGallery/>
        </section>
        <section id='contact'>
          <Consulta/>
        </section>
      </div>
      
    </>
  )
}

export default App
