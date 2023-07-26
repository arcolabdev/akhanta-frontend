import React, { useContext, useEffect } from "react";
import { truncateText, Camelize } from "../../utils/Utils";
import { Context } from "../../Context";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = (articles) => {
  const { article, setArticle } = useContext(Context);
  useEffect(() => console.log(article), [article]);

  return (
    <section className="blogs-container" id="blogs">
      <h2>Publicaciones</h2>
      <div className="blogs-box">
        <div className="blog-card0">
          <Link
            onClick={() => setArticle(articles.articles[0])}
            to={`/articles/${Camelize(articles.articles[0].title)}`}
          >
            <img src={articles.articles[0].img} alt="Portada del artículo"/>
            <div>
              <div>
                <h2>{articles.articles[0].title}</h2>
                <p>{truncateText(articles.articles[0].description, 100)}</p>
              </div>
              <Link
                onClick={() => setArticle(articles.articles[0])}
                to={`/articles/${Camelize(articles.articles[0].title)}`}
                className="moreButton"
              >
                Ver más
              </Link>
            </div>
          </Link>
        </div>
        <div className="blog-cards-container">
          {articles &&
            articles.articles.map((a, i) => {
              if (i !== 0 && i < 3) {
                return (
                  <div
                    className={`blog-card${i} blog-card`}
                    style={{
                      backgroundImage: "url(" + articles.articles[i].img + ")",
                    }}
                  >
                    {i === 2 ? (
                      <Link
                        onClick={() => setArticle(articles.articles[1])}
                        to="/articles"
                        className="card-link"
                      >
                        <h2>
                          <Link
                            onClick={() => setArticle(articles.articles[1])}
                            to="/articles"
                          >
                            Ver más artículos
                          </Link>
                        </h2>
                        <div className="blog-filter"> </div>
                      </Link>
                    ) : (
                      <Link
                        onClick={() => setArticle(articles.articles[1])}
                        to={`/articles/${Camelize(a.title)}`}
                        className="card-link"
                      >
                        <div className="blog-filter"> </div>
                        <h2>
                          <Link
                            onClick={() => setArticle(articles.articles[1])}
                            to={`/articles/${Camelize(a.title)}`}
                          >
                            {a.title}
                          </Link>
                        </h2>
                      </Link>
                    )}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
