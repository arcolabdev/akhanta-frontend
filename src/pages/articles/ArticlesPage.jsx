import React, { useEffect } from "react";
// import React, { useContext, useState, useEffect } from "react";
import "./ArticlesPage.css";
import AltHeader from "../../components/alt-header/AltHeader";
import Article from "../../components/article/Article";
import { articlesResponse } from "../../utils/Utils";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";

const ArticlesPage = () => {
  // const [page, setPage] = useState(1);
  // const [pageMax, setPageMax] = useState(null);
  // const [pages, setPages] = useState(null);
  // const [indexStart, setIndexStart] = useState(0);
  // const [indexEnd, setIndexEnd] = useState(4);
  // const [articlesArray, setArticlesArray] = useState(null);
  const lastIndex = articlesResponse.length - 1;

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
    <section className="articles_container">
      <div className="articles_background">
        <AltHeader />
      </div>
      <h2 className="articles_title">Conocimientos</h2>
      {articlesResponse &&
        articlesResponse.map((a, i) => {
          return <Article a={a} i={i} lastIndexOf={lastIndex} />;
        })}
      <ScrollToTopButton />
    </section>
  );
};

export default ArticlesPage;
