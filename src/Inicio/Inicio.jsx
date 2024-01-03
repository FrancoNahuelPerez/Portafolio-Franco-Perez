import styles from '../Inicio/Inicio.module.css'
import Animacion from '../Animacion/Animacion';
const Inicio = () => {
    return (
        <section className={styles.Inicio}>
            <article className={styles.full}>
                <h1>Full Stack Web Developer</h1>
                <p>Programador con enfoque en el desarrollo de aplicaciones web, tengo habilidades tanto en el Front-end como en el el Back-end. sin embargo mi especialidad y enfoque principal está en el Front-end.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div> 
            </article>

            <div className={styles.botones}>

                <h2>Franco Nahuel Perez</h2>
                <div>
                   <a href="mailto:francarp001@gmail.com" target="_blank">GMAIL</a> 
                   <a href="https://drive.google.com/file/d/18KWsTDL7TM5vgFQY7vJeol3bj42Ae-m0/view?usp=drive_link" target='_blank'>CV</a> 
                </div>

            </div>

            <Animacion/>
        </section>
    )
}

export default Inicio;