import styles from '../Menu/Redes.module.css'
import Linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'

const Redes = () => {
    return(
        <div className={styles.Redes}>
           <a href="https://www.linkedin.com/in/franco-nahuelperez/" target='_blank'>
            <img width='25px' src={Linkedin} alt="" />
           </a>

           <a href="https://github.com/FrancoNahuelPerez" target='_blank'>
           <img width='25px' src={github} alt="" />
           </a>

           {/* <a href="#">
           <img width='25px' src={instagram} alt="" />
           </a> */}
        </div>
    )
}

export default Redes;