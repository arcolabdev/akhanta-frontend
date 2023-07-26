import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";
import Phrase from "../../components/phrase/Phrase";
import Carousel from "../../components/reel/Carousel.jsx";
import Schedule from "../../components/schedule/Schedule";
import Blogs from "../../components/blogs/Blogs";
import { articlesResponse } from "../../utils/Utils";

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
        <Schedule />
      </div>
      <Carousel />
      <Blogs articles={articlesResponse} />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
