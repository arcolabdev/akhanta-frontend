import React from 'react'
import Header from '../../components/header/Header'
import imagenDetail from '../../assets/imagendetail.png'
import './AssociatedDetail.css'

const AssociatedDetail = () => {
    return (
        <>
            <section className='background-banner'>
                <Header />
                <h1>Gimnasio Yoga</h1>
            </section>
            <section className='about-section'>
                <div className='about-contain'>
                    <div className='info-contain'>
                        <h3>Hola,<br /> <span>Soy Jane</span></h3>
                        <p>Namaste y bienvenidos a todos. Soy una maestra de yoga y estoy aquí para guiarlos en un viaje de autoexploración y autodescubrimiento a través de la práctica del yoga. La práctica del yoga no se trata solo de estirar el cuerpo y hacer posturas complicadas. Se trata de encontrar la conexión entre nuestra mente, cuerpo y espíritu, y descubrir cómo podemos vivir una vida más plena y consciente. Acompáñenme en este camino de autoconocimiento y crecimiento personal, mientras exploramos juntos el maravilloso mundo del yoga.</p>

                    </div>
                    <div>
                    <img src={imagenDetail} alt='imagen-asociado' width={300} height={500} />
                    </div>
                </div>
            </section>
            <footer className='section-footer'>
                <a href="." target="_blank">Facebook</a>
                <a href="." target="_blank">Twitter</a>
                <a href="." target="_blank">Instagram</a>
            </footer>
        </>
    )
}

export default AssociatedDetail