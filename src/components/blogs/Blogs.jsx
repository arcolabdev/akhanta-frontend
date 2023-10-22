import React, { useContext } from "react";
import { truncateText } from "../../utils/Utils";
import { Context } from "../../Context";
import "./Blogs.css";
import { Link } from "react-router-dom";
import mandala_left from "../../assets/mandalas-left.png";
import mandala_right from "../../assets/mandalas-right.png";
import mandala_mobile_left from "../../assets/mandalas-mobile-left.png";
import mandala_mobile_right from "../../assets/mandalas-mobile-right.png";

const Blogs = ({ articles }) => {
  const { setArticle } = useContext(Context);

  return (
    <>
      {articles && (
        <section className="blogs-container" id="publicaciones">
        
        <div className="mandala-desktop">
        <img
          src={mandala_left}
          alt="decoration"
          className="mandala-image mandala-desktop"
        />
      </div>
      <div className="mandala-mobile">
        <img
          src={mandala_mobile_left}
          alt="decoration"
          className="mandala-image"
        />
      </div>

          <div className="blogs-section">
            <h2>Publicaciones</h2>
            <div className="blogs-box">
              <div className="blog-card0">
                <Link
                  onClick={() => setArticle(articles[0])}
                  to={`/articulos/${articles[0].id}`}
                >
                  <img src={articles[0].image} alt="Portada del artículo" />
                  <div>
                    <div>
                      <h2>{articles[0].title}</h2>
                      <p>{truncateText(articles[0].content, 150)}</p>
                    </div>
                    <Link
                      onClick={() => setArticle(articles[0])}
                      to={`/articulos/${articles[0].id}`}
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
                                to="/articulos"
                                className="card-link"
                              >
                                <h2>
                                  <Link
                                    onClick={() => setArticle(articles[1])}
                                    to="/articulos"
                                  >
                                    Ver más artículos
                                  </Link>
                                </h2>
                                <div className="blog-filter"> </div>
                              </Link>
                            ) : (
                              <Link
                                onClick={() => setArticle(articles[1])}
                                to={`/articulos/${articles[1].id}`}
                                className="card-link"
                              >
                                <div className="blog-filter"> </div>
                                <h2>
                                  <Link
                                    onClick={() => setArticle(articles[1])}
                                    to={`/articulos/${articles[1].id}`}
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
                                backgroundImage:
                                  "url(" + articles[i].image + ")",
                              }}
                            >
                              {" "}
                              <Link
                                onClick={() => setArticle(articles[1])}
                                to="/articulos"
                                className="card-link"
                              >
                                <h2>
                                  <Link
                                    onClick={() => setArticle(articles[1])}
                                    to="/articulos"
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
                              to="/articulos"
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
                              to="/articulos"
                              className="card-link"
                            >
                              <h2>
                                <Link
                                  onClick={() => setArticle(articles[0])}
                                  to="/articulos"
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
          </div>

          <div className="mandala-desktop">
        <img src={mandala_right} alt="decoration" className="mandala-image" />
      </div>
      <div className="mandala-mobile">
        <img
          src={mandala_mobile_right}
          alt="decoration"
          className="mandala-image"
        />
      </div>
        
        </section>
      )}
    </>
  );
};

export default Blogs;
