import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import './AssociatedDetail.css'
import { FaInstagram, FaFacebookF, } from 'react-icons/fa'
import { MdArrowBackIosNew, MdWhatsapp } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"


const AssociatedDetail = () => {

    const [associated, setAssociated] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/associates/${id}`)
            .then((res) => {
                setAssociated(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    if (!associated) {
        return null; 
      }

    const { banner, description, name, links } = associated.results || {};

    return (
        <>
            <section className='background-banner'>
                <Header />
                <h1>{name}</h1>
            </section>
            <section className='about-section'>
                <div className='about-contain'>
                    <div className='info-contain'>
                        <h3>Hola,<br /> <span>Soy {name}</span></h3>
                        <p>{description}</p>

                    </div>
                    <div className='image-contain'>
                        <img src={banner} alt='imagen-asociado' height={500} />
                    </div>
                </div>
                <Link to='/'><div className='arrow'><MdArrowBackIosNew size={35} color='#C8ABFB' /></div></Link>
            </section>
            <footer className='section-footer'>
                {links && links.map(link => {
                    switch (link.tag) {
                        case "INSTAGRAM":
                            return <a key={link.id} href={link.url} target="_blank" rel="noreferrer"><FaInstagram size={35} color='#C3BEAA' /></a>
                        case "FACEBOOK":
                            return <a key={link.id} href={link.url} target="_blank" rel="noreferrer"><FaFacebookF size={35} color='#C3BEAA' /></a>
                        case "WHATSAPP":
                            return <a key={link.id} href={link.url} target="_blank" rel="noreferrer"><MdWhatsapp size={35} color='#C3BEAA' /></a>
                        default:
                            return null; // no renderizar nada si el tag no coincide
                    }
                })}
            </footer>
        </>
    )
}

export default AssociatedDetail