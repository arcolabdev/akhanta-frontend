import React, { useState, useEffect } from "react";
import "./ArticlesPage.css";
import AltHeader from "../../components/alt-header/AltHeader";
import Article from "../../components/article/Article";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";
import axios from "axios";

const ArticlesPage = () => {
  // const [page, setPage] = useState(1);
  // const [pageMax, setPageMax] = useState(null);
  // const [pages, setPages] = useState(null);
  // const [indexStart, setIndexStart] = useState(0);
  // const [indexEnd, setIndexEnd] = useState(4);
  // const [articlesArray, setArticlesArray] = useState(null);
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrlPosts = "https://api.ar-colab.com:8443/api/v1/posts";
  const lastIndex = articles.length - 1;

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

  // let pagesArray = [];

  // useEffect(() => {
  //   setPageMax(Math.round(articlesResponse.length / 4));
  // }, [articlesResponse]);

  // useEffect(() => {
  //   setIndexStart(page * 4 - 1);
  //   setIndexEnd(indexStart + 4);
  // }, [page, indexStart]);

  // useEffect(() => {
  //   setArticlesArray(articlesResponse.slice(indexStart, indexEnd));
  // }, [indexStart, indexEnd]);

  // useEffect(() => {
  //   for (let i = 1; i <= pageMax; i++) {
  //     pagesArray.push(i);
  //   }
  // }, [pageMax]);

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: "instant",
      }),
    []
  );

  return (
    <>
      {!loading && articles && (
        <section className="articles_container">
          <div className="articles_background">
            <AltHeader />
          </div>
          <h2 className="articles_title">Conocimientos</h2>
          {articles &&
            articles.map((a, i) => {
              return <Article a={a} i={i} lastIndexOf={lastIndex} />;
            })}
          <ScrollToTopButton />
        </section>
      )}
    </>
  );
};

export default ArticlesPage;
