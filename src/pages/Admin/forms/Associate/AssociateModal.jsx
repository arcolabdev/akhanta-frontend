import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaEdit, FaTrash } from "react-icons/fa/";

function AssociateModal({ associateId }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleshowEdit = () => setShowEdit(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleshowDelete = () => setShowDelete(true);

  const handleDelete = (id) => {
    axios
      .delete("http://akhanta.herokuapp.com/api/v1/associates/" + id)
      .then((data) => console.log(data));
    setShowDelete(false);
  };

  return (
    <>
      <Button variant="info" onClick={handleshowEdit}>
        <FaEdit />
      </Button>

      <Button variant="danger" onClick={handleshowDelete}>
        <FaTrash />
      </Button>
      <Modal show={showEdit} onHide={handleshowDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Asociado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Asociado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seguro que deseas eliminar el Asociado?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(associateId)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AssociateModal;
