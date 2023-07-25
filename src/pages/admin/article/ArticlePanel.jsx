import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";
import { Table } from "react-bootstrap";
import DeleteArticle from "../../../components/admin/article/DeleteArticle";
import CreateArticle from "../../../components/admin/article/CreateArticle";

function ArticlePanel() {
  const [data, setData] = useState([]);

  const baseUrl =
    "https://api.ar-colab.com:8443/api/v1/posts/";

  const peticionGet = () => {
    axios.get(baseUrl).then((response) => setData(response.data.results));
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <section
      className="container justify-content-center form-container"
      style={{ backgroundColor: "#fffcf0" }}
    >
      <Link to="/admin">
        <span>
          <TiArrowLeft className="icon" size="65px" color="#421400" />
        </span>
      </Link>
      <h1>Artículos</h1>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Contenido</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((article, index) => {
              return (
                <tr key={index}>
                  <td>{article.id}</td>
                  <td>{article.title}</td>
                  <td>
                    {article.content.length > 100
                      ? article.content.substring(0, 120) + "..."
                      : article.content}
                  </td>
                  <td style={{ display: "flex", gap: "0.5rem" }}>
                    <CreateArticle edit={true} article={article} />
                    <DeleteArticle
                      articleId={article.id}
                      articleName={article.name}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <CreateArticle />
    </section>
  );
}

export default ArticlePanel;
