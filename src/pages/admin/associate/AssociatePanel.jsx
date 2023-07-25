import "./AssociatePanel.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";
import { Table } from "react-bootstrap";
import DeleteAssociate from "../../../components/admin/associate/DeleteAssociate";
import CreateAssociate from "../../../components/admin/associate/CreateAssociate";

function AssociatePanel() {
  const [data, setData] = useState([]);

  const baseUrl =
    "https://api.ar-colab.com:8443/api/v1/associates/";

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
      <h1>Asociados</h1>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Links</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((associate, index) => {
              return (
                <tr key={index}>
                  <td>{associate.id}</td>
                  <td>{associate.name}</td>
                  <td>
                    {associate.description.length > 100
                      ? associate.description.substring(0, 120) + "..."
                      : associate.description}
                  </td>
                  <td>
                    {associate.links.map((link) => {
                      return (
                        <a
                          key={link.id}
                          href={"https://" + link.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "blue",
                            textDecoration: "underline",
                          }}
                        >
                          {link.url + link.tag}
                          <br />
                        </a>
                      );
                    })}
                  </td>
                  <td style={{ display: "flex", gap: "0.5rem" }}>
                    <CreateAssociate edit={true} associate={associate} />
                    <DeleteAssociate
                      associateId={associate.id}
                      associateName={associate.name}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <CreateAssociate />
    </section>
  );
}

export default AssociatePanel;
