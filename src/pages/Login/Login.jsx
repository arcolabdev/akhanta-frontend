import React from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import { MdArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <section className='login-context'>
        <section className='header container'>
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
        <Link to='/'>
            <div className='arrow'><MdArrowBackIosNew size={35} color='#C8ABFB'/>
            </div></Link>
    </section>
    </>
  )
}

export default Login;
