import React, { useContext, useEffect } from "react";
import "./ArticleDetail.css";
import AltHeader from "../../components/alt-header/AltHeader";
import { Context } from "../../Context";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";

const ArticleDetail = () => {
  const { article } = useContext(Context);

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: "instant",
      }),
    []
  );

  return (
    <section className="article_detail_container">
      <div className="articles_background">
        <AltHeader />
      </div>
      {article ? (
        <section className="article_detail">
          <p className="article_date">{article.date}</p>
          <h2>{article.title}</h2>
          <img className="article_img" src={article.img} />
          <p className="article_description">{article.description}</p>
          <ScrollToTopButton />
        </section>
      ) : (
        <section className="article_detail">
          <h2 className="article_error">
            Lo sentimos, no pudimos encontrar esa publicación
          </h2>
        </section>
      )}
    </section>
  );
};

export default ArticleDetail;
