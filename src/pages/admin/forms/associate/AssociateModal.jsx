import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa/";

function AssociateModal({ associateId, associateName }) {
  const [show, setShow] = useState(false);

  const baseUrl = "http://localhost:8080/api/v1/associates";

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
          <Modal.Title>Eliminar Asociado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Seguro que deseas eliminar a {associateName}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(associateId)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AssociateModal;
