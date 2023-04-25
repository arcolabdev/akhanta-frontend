import React from "react";
import "./About.css";
import clip from "../../assets/clip.png";
import mandala_left from "../../assets/mandalas-left.png";
import mandala_right from "../../assets/mandalas-right.png";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div>
        <img src={mandala_left} alt="decoration" className="about-mandala" />
      </div>
      <div className="about-content">
        <article>
          <h2>¿Qué es Akhanta?</h2>
          <p>
            La expresión Akhanta manifiesta la idea de “Unificación Interna”,
            integrarse desde adentro. Nuestra misión principal es transmitir y
            ofrecer antigua ciencia espiritual a todo aquel que se sienta
            atraído hacia el bienestar personal y el autodescubrimiento. Como
            seres humanos llevamos dentro infinito potencial, y adentrarse en él
            permite acceder a una vida chispeante y llena de esplendor.
            Bienvenidos a este espacio destinado al crecimiento individual.
          </p>
        </article>
        <img src={clip} width={240} height={50} alt="clip" />
        <article>
          <h2>¿Qué hacemos?</h2>
          <p>
            Akhanta funciona a modo de escuela antigua donde podrás explorar tu
            potencial más elevado, gestar poderosos procesos de transformación,
            entrar en la esencia de las artes taoístas y en meditaciones que te
            sumergirán en aspectos claves de la vida dándote acceso a secretos
            de sabiduría antigua. Con diferentes niveles de participación,
            podrás comenzar tu viaje de cambio y transformación como mas lo
            sientas.
            <br />
            Una de ellas son las <b>Charlas informativas</b>. Estas tienen como
            objetivo exponer conocimiento de forma rápida y sintética. Otro de
            nuestros eventos son los <b></b>Retiros<b></b> en determinados
            momentos del año que sirven para vivenciar experiencias directas de
            profundo aprendizaje. Posiblemente lo mas significativos sean los{" "}
            <b>Encuentros</b> regulares, ya que están destinados a quienes
            decidan un camino firme de crecimiento y avance. Por ultimo existe
            la posibilidad de concebir un <b>Plan Individual</b> de
            Transformación que permite agilizar los cambios en la forma de
            percibes y experimentas tu vida.
          </p>
        </article>
        <article>
          <h2>¿Cómo podemos ayudarte?</h2>
          <p>
            Muchas veces nos encontramos desorientados en la vida. Otras dolidos
            por algún suceso que nos toco atravesar. A veces sentimos que algo
            se apaga en el interior y todo parece igual. Y otras mas ni sabemos
            lo que buscamos. Quizás estamos desconformes con nuestro cuerpo,
            nuestra familia y/o con el trabajo. O nos invade el sentimiento de
            una vida estancada, repetitiva o aburrida. Hasta es posible que
            sientas que algo esta mal dentro tuyo. Por otra parte, algo despertó
            la espiritualidad y no sabes por donde empezar. Entonces podes
            acercarte a alguno de los eventos que se promocionan en nuestras
            redes o también escribirnos y contarnos sobre lo que estas buscando.
          </p>
        </article>
      </div>
      <div>
        <img src={mandala_right} alt="decoration" className="about-mandala" />
      </div>
    </section>
  );
};

export default About;
