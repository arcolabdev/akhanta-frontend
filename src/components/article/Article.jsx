import React from "react";
import "./Article.css";

const Article = ({ a, i, lastIndexOf }) => {
  function truncateText(text) {
    let truncatedText;
    const maxLen = 350;
    const separator = " ";

    if (text.length <= maxLen) {
      truncatedText = text;
    } else {
      let formatedText = text.substr(0, text.lastIndexOf(separator, maxLen));
      if (formatedText.charAt(formatedText.length - 1) === ",") {
        formatedText = formatedText.substring(0, formatedText.length - 1);
      }
      truncatedText = formatedText + "...";
    }
    return truncatedText;
  }

  return (
    <div className="article">
      <p className="article_date article_date_pc">{a.date}</p>
      <div className="article_info_container">
        <div className="article_info">
          <p className="article_date article_date_mobile">{a.date}</p>
          <h2>{a.title}</h2>
          <p className="article_description">{truncateText(a.description)}</p>
        </div>
        <img src={a.img} className="article_image" />
      </div>
      <button className="hide_mobile">Ver más</button>
      {i !== lastIndexOf ? <hr /> : <></>}
    </div>
  );
};

export default Article;
