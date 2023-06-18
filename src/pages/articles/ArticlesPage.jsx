import React, { useContext, useState, useEffect } from "react";
import "./ArticlesPage.css";
import AltHeader from "../../components/alt-header/AltHeader";
import Article from "../../components/article/Article";
import { articlesResponse } from "../../utils/Utils";

const ArticlesPage = () => {
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(null);
  const [pages, setPages] = useState(null);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(4);
  const [articlesArray, setArticlesArray] = useState(null);
  const lastIndex = articlesResponse.length - 1;

  let pagesArray = [];

  useEffect(() => {
    setPageMax(Math.round(articlesResponse.length / 4));
  }, [articlesResponse]);

  useEffect(() => {
    setIndexStart(page * 4 - 1);
    setIndexEnd(indexStart + 4);
  }, [page, indexStart]);

  useEffect(() => {
    setArticlesArray(articlesResponse.slice(indexStart, indexEnd));
  }, [indexStart, indexEnd]);

  useEffect(() => {
    for (let i = 1; i <= pageMax; i++) {
      pagesArray.push(i);
    }
    console.log(pagesArray);
  }, [pageMax]);

  return (
    <section className="articles_container">
      <div className="articles_background">
        <AltHeader />
      </div>
      {articlesResponse &&
        articlesResponse.map((a, i) => {
          return <Article a={a} i={i} lastIndexOf={lastIndex} />;
        })}
    </section>
  );
};

export default ArticlesPage;
