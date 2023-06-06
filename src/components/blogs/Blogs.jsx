import React from "react";
import { truncateText } from "../../utils/Utils";
import { articlesResponse } from "../../utils/Utils";
import Article from "../article/Article";
import "./Blogs.css";

const Blogs = (articles) => {
  console.log(articles);
  return (
    <section className="blogs-container" id="blogs">
      <h2>Blog</h2>
      <div className="blogs-box">
        <div
          className="blog-card0"
          style={{ backgroundImage: "url(" + articles.articles[0].img + ")" }}
        >
          {" "}
          <h2>{articles.articles[0].title}</h2>
          <p className="article_description">
            {truncateText(articles.articles[0].description, 150)}
          </p>{" "}
        </div>
        <div className="blog-cards-container">
          {articles &&
            articles.articles.map((a, i) => {
              if (i !== 0 && i < 3) {
                return (
                  <div
                    className={`blog-card`}
                    style={{
                      backgroundImage: "url(" + articles.articles[0].img + ")",
                    }}
                  >
                    {" "}
                    <h2>{a.title}</h2>
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
