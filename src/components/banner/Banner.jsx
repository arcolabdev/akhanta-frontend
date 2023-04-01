import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <section className='banner-content container'>
      <div className='banner-flex'>
        <h1 className='banner-title'>
          "Para la mente que está quieta,<br/>
          <span> todo el universo se rinde</span>"
        </h1>
        <p className='banner-author'>-Lao Tse</p>
      </div>
    </section>
  )
}

export default Banner