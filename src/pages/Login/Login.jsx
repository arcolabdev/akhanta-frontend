import React from 'react'
import logo from '../../assets/logo.png'
import './Login.css'


export const Login = () => {
  return (
    <>
    <section className='login-context container'>
        <section className='header'>
            <img src="" alt="icon" />
            <img src={logo} alt="logo" />
        </section>
        <section className='login'>
            <div className='login-title'>
                <h1>Welcome</h1>
                <h2>Please sign in</h2>
            </div>
            <div className='login-form'>
                <form action="login">
                    <input type="email" name="email" id="email" />
                    <input type="password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </section>
    </section>
    
    </>
  )
}
