import React, { useContext } from "react";
import { truncateText, Camelize } from "../../utils/Utils";
import { Context } from "../../Context";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = ({ articles }) => {
  const { setArticle } = useContext(Context);

  return (
    <>
      {articles && (
        <section className="blogs-container" id="blogs">
          <h2>Publicaciones</h2>
          <div className="blogs-box">
            <div className="blog-card0">
              <Link
                onClick={() => setArticle(articles[0])}
                to={`/articles/${Camelize(articles[0].title)}`}
              >
                <img src={articles[0].image} alt="Portada del artículo" />
                <div>
                  <div>
                    <h2>{articles[0].title}</h2>
                    <p>{truncateText(articles[0].content, 100)}</p>
                  </div>
                  <Link
                    onClick={() => setArticle(articles[0])}
                    to={`/articles/${Camelize(articles[0].title)}`}
                    className="moreButton"
                  >
                    Ver más
                  </Link>
                </div>
              </Link>
            </div>
            <div className="blog-cards-container">
              {articles &&
              // eslint-disable-next-line
                articles.map((a, i) => {
                  if (i !== 0 && i < 3) {
                    return (
                      <>
                        <div
                          className={`blog-card${i} blog-card`}
                          style={{
                            backgroundImage: "url(" + articles[i].image + ")",
                          }}
                        >
                          {i === 2 ? (
                            <Link
                              onClick={() => setArticle(articles[1])}
                              to="/articles"
                              className="card-link"
                            >
                              <h2>
                                <Link
                                  onClick={() => setArticle(articles[1])}
                                  to="/articles"
                                >
                                  Ver más artículos
                                </Link>
                              </h2>
                              <div className="blog-filter"> </div>
                            </Link>
                          ) : (
                            <Link
                              onClick={() => setArticle(articles[1])}
                              to={`/articles/${Camelize(a.title)}`}
                              className="card-link"
                            >
                              <div className="blog-filter"> </div>
                              <h2>
                                <Link
                                  onClick={() => setArticle(articles[1])}
                                  to={`/articles/${Camelize(a.title)}`}
                                >
                                  {a.title}
                                </Link>
                              </h2>
                            </Link>
                          )}
                        </div>
                        {articles[1] && !articles[2] && (
                          <div
                            className={`blog-card${i} blog-card`}
                            style={{
                              backgroundImage: "url(" + articles[i].image + ")",
                            }}
                          >
                            {" "}
                            <Link
                              onClick={() => setArticle(articles[1])}
                              to="/articles"
                              className="card-link"
                            >
                              <h2>
                                <Link
                                  onClick={() => setArticle(articles[1])}
                                  to="/articles"
                                >
                                  Ver más artículos
                                </Link>
                              </h2>
                              <div className="blog-filter"> </div>
                            </Link>{" "}
                          </div>
                        )}
                      </>
                    );
                  } else if (i === 0 && !articles[1]) {
                    return (
                      <>
                        <div
                          className={`blog-card1 blog-card`}
                          style={{
                            backgroundImage: "url(" + articles[i].image + ")",
                          }}
                        >
                          <Link
                            onClick={() => setArticle(articles[0])}
                            to="/articles"
                            className="card-link"
                          >
                            <div className="blog-filter"> </div>
                          </Link>
                        </div>

                        <div
                          className={`blog-card2 blog-card`}
                          style={{
                            backgroundImage: "url(" + articles[i].image + ")",
                          }}
                        >
                          <Link
                            onClick={() => setArticle(articles[0])}
                            to="/articles"
                            className="card-link"
                          >
                            <h2>
                              <Link
                                onClick={() => setArticle(articles[0])}
                                to="/articles"
                              >
                                Ver más artículos
                              </Link>
                            </h2>
                            <div className="blog-filter"> </div>
                          </Link>
                        </div>
                      </>
                    );
                  }
                })}
            </div>
          </div>
        </section>
      )}
    </>
    // articles && (<p>Hola</p>)
    // articles && (<p>{articles[0].title}</p>)
  );
};

export default Blogs;
