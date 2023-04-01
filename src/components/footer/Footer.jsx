import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-content container'>
        <h1 className='footer-title'>Contáctanos</h1>
        <div className='footer-box'>
        <form className='footer-form' >
          <div className='footer-form-div' >
            <label className='footer-form-tag'>Name</label>
            <input
              type='text'
              name='name'
              className='footer-form-input'
              placeholder='Inserta tu nombre'
            ></input>
          </div>
          <div className='footer-form-div'>
            <label className='footer-form-tag' >Email</label>
            <input
              type='email'
              name='email'
              className='footer-form-input'
              placeholder='Inserta tu email'

            ></input>
          </div>
          <div className='footer-form-div contact-form-area'>
            <label className='footer-form-tag' >Mensaje</label>
            <textarea name='message' cols='30' rows='10' className='contact-form-input' placeholder='Escribí tu mensaje' ></textarea>
          </div>

          <button className='contact-button'>
            Enviar mensaje
          </button>
        </form>
        <ul className='footer-nav-media'>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer