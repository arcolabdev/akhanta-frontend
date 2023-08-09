import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrlPosts = "https://api.ar-colab.com:8443/api/v1/posts";

  useEffect(() => {
    axios
      .get(baseUrlPosts)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="background-header-banner">
        <div className="banner-filter"></div>
        <Header />
        <Banner />
      </div>
      <About />
      <Phrase />
      <Carousel />
      <Schedule />
      {!loading && articles && <Blogs articles={articles} />}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
