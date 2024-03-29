import React, { useContext, useEffect, useState } from "react";
import "./ArticleDetail.css";
import AltHeader from "../../components/alt-header/AltHeader";
import { Context } from "../../Context";
import ScrollToTopButton from "../../components/autoscroll/ScrollToTopButton";
import axios from "axios";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";

const ArticleDetail = () => {
  const { article, setArticle } = useContext(Context);
  const [loading, setLoading] = useState(true);
  let id = window.location.pathname.split("/");
  id = id[id.length - 1];
  const baseUrlPosts = `https://api.ar-colab.com:8443/api/v1/posts/${id}`;

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
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [article, setArticle, baseUrlPosts]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [article, id]);

  return (
    <section className="article_detail_container">
      {!loading && article && (
        <>
          <Helmet>
            <meta property="og:title" content={article.title} />
            <meta
              property="og:description"
              content={article.content.substring(2, 100) + "..."}
            />
            <meta property="og:type" content="artículo" />
            <meta
              property="og:url"
              content="https://es.ryte.com/magazine/este-articulo"
            ></meta>
          </Helmet>

          <div className="articles_background">
            <AltHeader title={article.title} />
          </div>
          <section className="article_detail">
            <img
              className="article_img"
              alt="Portada del articulo"
              src={article.image}
            />
            <p className="article_description">{parse(article.content)}</p>
            <ScrollToTopButton />
          </section>
        </>
      )}
      {!loading && !article && (
        <>
          <div className="articles_background">
            <AltHeader />
          </div>
          <section className="article_detail">
            <h2 className="article_error">
              Lo sentimos, no pudimos encontrar esa publicación
            </h2>
          </section>
        </>
      )}
    </section>
  );
};

export default ArticleDetail;
