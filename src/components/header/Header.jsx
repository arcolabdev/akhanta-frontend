import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='header-content container'>
      <nav className='header-nav'>
        <ul>
          <li>Quienes somos</li>
          <li>Asociados</li>
        </ul>
      </nav>
      <img className='header-logo' src={logo} width={70} height={40} alt='' />
      <nav className='header-nav'>
        <ul>
          <li>Contacto</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
