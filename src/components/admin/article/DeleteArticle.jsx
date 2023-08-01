import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa/";

function DeleteArticle({ articleId, articleName }) {
  const [show, setShow] = useState(false);
  const baseUrl =
    "https://api.ar-colab.com:8443/api/v1/articles";

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios
      .delete(`${baseUrl}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => console.log(data));
    
      window.location.reload();
  };

  return (
    <div>
      <Button variant="danger" onClick={() => setShow(true)}>
        <FaTrash />
      </Button>
      <Modal show={show}>
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Eliminar Articulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Seguro que deseas eliminar "{articleName}"?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(articleId)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteArticle;
