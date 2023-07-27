import React, { useContext, useEffect, useState } from "react";
import "./ArticleDetail.css";
import AltHeader from "../../components/alt-header/AltHeader";
import { Context } from "../../Context";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";
import axios from "axios";

const ArticleDetail = () => {
  const { article, setArticle } = useContext(Context);
  const [loading, setLoading] = useState(true);
  let id = window.location.pathname.split("/");
  id = id[id.length - 1];
  const baseUrlPosts = `https://api.ar-colab.com:8443/api/v1/posts/${id}`;

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: "instant",
      }),
    []
  );
  useEffect(() => {
    if (!article) {
      axios
        .get(baseUrlPosts)
        .then((response) => {
          setArticle(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false)
    }
  }, [article, baseUrlPosts]);

  return (
    <section className="article_detail_container">
      <div className="articles_background">
        <AltHeader />
      </div>
      {!loading && article && (
        <section className="article_detail">
          <p className="article_date">{article.date}</p>
          <h2>{article.title}</h2>
          <img
            className="article_img"
            alt="Portada del articulo"
            src={article.image}
          />
          <p className="article_description">{article.content}</p>
          <ScrollToTopButton />
        </section>
      )}
      {!loading && !article && (
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
