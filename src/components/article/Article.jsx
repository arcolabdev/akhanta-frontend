import React from "react";
import "./Article.css";
import { truncateText } from "../../utils/Utils";

const Article = ({ a, i, lastIndexOf }) => {

  return (
    <div className="article">
      <p className="article_date article_date_pc">{a.date}</p>
      <div className="article_info_container">
        <div className="article_info">
          <p className="article_date article_date_mobile">{a.date}</p>
          <h2>{a.title}</h2>
          <p className="article_description">
            {truncateText(a.description, 350)}
          </p>
        </div>
        <img src={a.img} className="article_image" />
      </div>
      <button className="hide_mobile">Ver más</button>
      {i !== lastIndexOf ? <hr /> : <></>}
    </div>
  );
};

export default Article;
