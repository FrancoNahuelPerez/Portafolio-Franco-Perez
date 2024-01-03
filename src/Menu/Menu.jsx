import styles from '../Menu/Menu.module.css';
import { Link } from 'react-router-dom';
import Redes from './Redes';
import home from '../assets/Inicio.svg';
import proyec from '../assets/proyectos.svg';
import sobre from '../assets/sobremi.svg';


const Menu = () => {
    return(
        <header className={styles.header}>
            <span className={styles.logo}>FRANCO</span>

            <nav className={styles.nav}>

              <Link to='/Portafolio-Plantilla-React/'><span>I</span>nicio</Link>

              <Link to='/Portafolio-Plantilla-React/proyectos'><span>P</span>royectos</Link>

              <Link to='/Portafolio-Plantilla-React/sobremi'><span>S</span>obreMi</Link>

            </nav>

            <nav className={styles.navMobile}>
                 
              <Link to='/Portafolio-Plantilla-React/'>
                <img width='40px' src={home} alt="" />
              </Link>


              <Link to='/Portafolio-Plantilla-React/proyectos'>
              <img width='40px' src={proyec} alt="" />
              </Link>


              <Link to='/Portafolio-Plantilla-React/sobremi'>
               <img width='40px' src={sobre} alt="" />
              </Link>

            </nav>


            <Redes/>
        </header>
    )
}

export default Menu;