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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quis vitae eaque enim deserunt soluta animi culpa officiis veniam qui. Possimus et voluptatibus soluta quia rerum cumque ea numquam odio</p>
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
