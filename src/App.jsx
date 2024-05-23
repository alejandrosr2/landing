
import './App.css'
import Consulta from './components/consulta/Consulta'
import Description from './components/description/Description'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/ourServices/Services'
import Video from './components/ourServices/Video'
import ProyectGallery from './components/proyects/ProyectGallery'



function App() {


  return (
    <>
      <div className='font-abc'>
        <Header/>
        
        <Hero/>
        <Description/>
        <Services/>
        <Video/>
        <ProyectGallery/>
        <Consulta/>
      </div>
      
    </>
  )
}

export default App
