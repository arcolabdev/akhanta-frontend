import React from 'react'
import './About.css'
import clip from '../../assets/clip.png'
const About = () => {
  return (
    <section className='about-content container'>
        <div>
          <h2>
            ¿Qué es Akhanta?
          </h2>
          <p>Somos una organización taoísta que se dedica a ofrecer cursos y actividades para mejorar la salud de las personas. Nos enfocamos en ayudar a las personas a encontrar la armonía y el equilibrio en sus vidas a través de enseñanzas y prácticas taoístas.</p>
        </div>
        <img src={clip} width={240} height={50} alt=''/>
        <div>
          <h2>
            ¿Qué hacemos?
          </h2>
          <p>En Akhanta ofrecemos una variedad de cursos y actividades diseñados para mejorar la salud física, mental y emocional de las personas. Nuestros cursos incluyen prácticas como tai chi, qigong, meditación y otros ejercicios taoístas que ayudan a mejorar la flexibilidad, reducir el estrés y encontrar un mayor sentido de calma y serenidad.</p>
        </div>
        <div>
          <h2>
            ¿Cómo podemos ayudarte?
          </h2>
          <p>En Akhanta, podemos ayudarte a mejorar tu salud y bienestar en todos los aspectos a través de nuestras actividades y cursos taoístas. Ya sea que desees mejorar tu flexibilidad, reducir el estrés o simplemente encontrar una mayor armonía y equilibrio en tu vida, nuestro equipo de expertos en taoísmo está aquí para ayudarte a lograr tus objetivos. Únete a nuestra comunidad y comienza tu camino hacia una vida más saludable y plena.</p>
        </div>
    </section>
  )
}

export default About