import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";
import Phrase from "../../components/phrase/Phrase";
import Carousel from "../../components/reel/Carousel";

const Home = () => {
  return (
    <>
      <div className="background-header-banner">
        <div className="banner-filter"></div>
        <Header />
        <Banner />
      </div>
      <div className="background-about-reel">
        <About />
        <Phrase />
        <Carousel />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
