import React from 'react'
import './Home.css'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Reel from '../components/reel/Reel'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <div className='background-header-banner'>
                <Header />
                <Banner />
            </div>
            <div className='background-about-reel'>
                <About />
                <Reel />
            </div>
            <Footer/>
        </>
    )
}

export default Home