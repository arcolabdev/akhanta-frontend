import React from "react";
import { truncateText } from "../../utils/Utils";
import "./Blogs.css";

const Blogs = (articles) => {
  console.log(articles);
  return (
    <section className="blogs-container container" id="blogs">
      <h2>Blog</h2>
      <div className="blogs-box">
        <div className="blog-card0">
          <img src={articles.articles[0].img} alt={articles.articles[0].title}/>
          <div>
            <div>
              <h2>{articles.articles[0].title}</h2>
              <p>{truncateText(articles.articles[0].description, 100)}</p>
            </div>
            <a href="/articles" className="moreButton">
              Ver más
            </a>
          </div>
        </div>
        <div className="blog-cards-container">
          {articles &&
            articles.articles.map((a, i) => {
              if (i !== 0 && i < 3) {
                return (
                  <div
                    className={`blog-card${i} blog-card`}
                    style={{
                      backgroundImage: "url(" + a.img + ")",
                    }}
                  >
                    {/* <h2>{a.title}</h2> */}
                    {i === 2 ? (
                      // <a href="/articles" className="moreButton">
                      //   Ver más
                      // </a>
                      <h2>
                        <a href="/articles" >
                          Ver más artículos
                        </a>
                      </h2>
                    ) : (
                      <h2>{a.title}</h2>
                    )}
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
