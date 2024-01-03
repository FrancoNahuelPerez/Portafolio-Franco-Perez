import './App.css'
import Animacion from './Animacion/Animacion.jsx'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio.jsx'
import Proyectos from './Proyectos/Proyectos.jsx'
import SobreMi from './SobreMi/SobreMi.jsx'
import Menu from './Menu/Menu'
function App() {

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/Portafolio-Plantilla-React/' element={<Inicio/>}/>
        <Route path='/Portafolio-Plantilla-React/proyectos' element={<Proyectos/>}/>
        <Route path='/Portafolio-Plantilla-React/sobremi' element={<SobreMi/>}/>
      </Routes>
    </div>
  )
}

export default App
