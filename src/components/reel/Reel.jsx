import React from 'react'
import './Reel.css'
import reel from '../../assets/reel.png'

const Reel = () => {
  return (
    <section className='reel-content container' id='associate'>
        <h2 className='reel-title'>Nuestros Asociados</h2>
        <img src={reel} width={300} height={300} alt=''>
        </img>
    </section>
  )
}

export default Reel