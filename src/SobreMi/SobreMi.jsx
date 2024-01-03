import styles from '../SobreMi/SobreMi.module.css'
import Animacion from '../Animacion/Animacion.jsx' 
import perfil from '../assets/perfil.svg'
import yo from '../assets/Fullstack-Developer.webp'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
            <article className={styles.left}>
                <div className={styles.intro}>
                    <div className={styles.img}>
                        <img src={yo} alt="" />
                    </div>
                    <p>Hola, Me llamo  Franco Nahuel Perez. Un apasionado desarrollador Full-Stack graduado de la  Institución Soy Henry. Mi enfoque principal se encuentra en el Back-end, donde encuentro mi verdadera pasión y donde he forjado gran parte de mi experiencia.</p>
                    <div className={styles.adornos}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </article>

            <article className={styles.center}>
                <Animacion/>
            </article>

            <article className={`${styles.edu} ${styles.right}`}>
                <h2>Educación</h2>

                <div>
                    <h3>Soy Henry</h3>
                    <h4>Abril 2023 - Octubre 2023</h4>
                </div>

                <div>
                    <h3>DevTalles</h3>
                    <h4>TypeScript, Node</h4>
                </div>

                <div>
                    <h3>FreeCodeCamp</h3>
                    <h4>Javascript</h4>
                </div>
            </article>
        </section>
    )
}

export default SobreMi;
