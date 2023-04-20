import React from 'react'
import Header from '../../components/header/Header'
import imagenDetail from '../../assets/imagendetail.png'
import './AssociatedDetail.css'
import { FaInstagram, FaTwitter, FaFacebookF} from 'react-icons/fa'
import { MdArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom';

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
                    <div className='image-contain'>
                    <img src={imagenDetail} alt='imagen-asociado' height={500} />
                    </div>
                </div>
                <Link to='/'><div className='arrow'><MdArrowBackIosNew size={35} color='#C8ABFB'/></div></Link>
            </section>
            <footer className='section-footer'>
                <a href="." target="_blank"><FaInstagram  size={35} color='#C3BEAA'/></a>
                <a href="." target="_blank"><FaTwitter size={35} color='#C3BEAA'/></a>
                <a href="." target="_blank"><FaFacebookF size={35} color='#C3BEAA'/></a>
            </footer>
        </>
    )
}

export default AssociatedDetail