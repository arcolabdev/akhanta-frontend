import React from 'react'
import logo from '../../assets/logo.png'
import './Login.css'

const Login = () => {
  return (
    <>
    <section className='login-context container'>
        <section className='header'>
            <img src={logo} alt="logo" />
        </section>
        <section className='login'>
            <div  className='login-container'>
                <div className='login-title'>
                    <h1>Welcome</h1>
                    <h2>Please log in</h2>
                </div>
                <div className='login-form'>
                    <form action="login">
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                        <button type="submit">Log In</button>
                    </form>
                </div> 
            </div>
            
        </section>
    </section>
    </>
  )
}

export default Login;
