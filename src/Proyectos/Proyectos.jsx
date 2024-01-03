import styles from '../Proyectos/Proyectos.module.css';
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import dogs2 from '../assets/dogs2.webp'
import dogs from '../assets/dogs2.webp'
import food from '../assets/food.webp'
import xul from '../assets/xul.webp'
import psql from '../assets/psql.svg'
import node from '../assets/node.svg'
import express from '../assets/express.svg'
import redux from '../assets/redux.svg'

const Proyectos = () => {

    const tarjetas = [
      {
        image:[dogs],
        name:'Proyecto Dogs',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js,tailwind, react],
        url:'https://github.com/FrancoNahuelPerez/PI-Dogs-main',
      },

      {
        image:[food],
        name:'Proyecto Food',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },

      {
        image:[xul],
        name:'Proyecto Xul',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },

    ]

    return (
        <section className={styles.Proyectos}>
         <div className={styles.servicios}>
        <h2>Tecnologias</h2>
        <div className={styles.habi}>
          <div>
            <img src={html} alt="logo html" />
            <h5>HTML</h5>
          </div>

          <div>
            <img src={css} alt="logo css" />
            <h5>CSS</h5>
          </div>

  
          <div>
            <img src={tailwind} alt="logo tailwind" />
            <h5>TAILWIND</h5>
          </div>

          <div>
            <img src={js} alt="logo js" />
            <h5>JAVASCRIPT</h5>
          </div>

          <div>
            <img src={node} alt="logo node" />
            <h5>NODE</h5>
          </div>

          <div>
            <img src={express} alt="logo express" />
            <h5>EXPRESS</h5>
          </div>

          <div>
            <img src={react} alt="logo react" />
            <h5>REACT</h5>
          </div>

  

          <div>
            <img src={psql} alt="logo" />
            <h5>PostgreSQL</h5>
          </div>

          <div>
            <img src={redux} alt="logo Redux" />
            <h5>REDUX</h5>
          </div>
        </div>

        {/* <div>
          <h2 className={styles.h2S}>Services</h2>
          <div className={styles.metodo}>
            <div>
              <img src={code} alt="imagen code" />
              <p>
                Development of specific solutions for your modern web
                applications.
              </p>
            </div>

            <div>
              <img src={web} alt="imagen web" />
              <p>technological projects adapted to your needs.</p>
            </div>

            <div>
              <img src={desing} alt="imagen desing" />
              <p>Responsive design for all devices</p>
            </div>
          </div>
        </div> */}
      </div>



            <h2></h2>
            <div className={styles.cards}>

                {
                  tarjetas.map((card,index) => {
                    return(
                      <div key={index} className={styles.card}>
                        <div className={styles.img}>
                          <img width='100%' height='250px' src={card.image} alt="" />
                        </div>

                        <h3>{card.name}</h3>

                        <p>{card.descrip}</p>

                        <div className={styles.tecno}>
                          <img width='30px' src={card.tecno[0]} alt="" />
                          <img width='30px' src={card.tecno[1]} alt="" />
                          <img width='30px' src={card.tecno[2]} alt="" />
                          <img width='30px' src={card.tecno[3]} alt="" />
                          <img width='30px' src={card.tecno[4]} alt="" />
                        </div>

                        <div className={styles.github}>
                          <a href={card.url} target='_blank'>
                            <img width='30px' src={github} alt="" />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }

            </div>
        </section>
    )
}

export default Proyectos;