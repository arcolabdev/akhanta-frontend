import React, { useContext, useState } from "react";
import "./Article.css";
import { truncateText } from "../../utils/Utils";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { useEffect } from "react";
import { Camelize } from "../../utils/Utils";

const Article = ({ a, i, lastIndexOf }) => {
  const { setArticle } = useContext(Context);
  const [pathname, setPathname] = useState(null);

  useEffect(() => setPathname(Camelize(a.title)), [a]);

  return (
    <div className="article">
      <p className="article_date article_date_pc">{a.date}</p>
      <div className="article_info_container">
        <div className="article_info">
          <p className="article_date article_date_mobile">{a.date}</p>
          <h2>{a.title}</h2>
          <p className="article_description">{truncateText(a.content, 400)}</p>
        </div>
        <img
          src={a.image}
          className="article_image"
          alt="Portada del articulo"
        />
      </div>

      <button className="hide_mobile" onClick={() => setArticle(a)}>
        <Link
          to={{
            pathname: `/articles/${pathname}`,
          }}
        >
          Ver más
        </Link>
      </button>

      {i !== lastIndexOf ? <hr /> : <></>}
    </div>
  );
};

export default Article;
