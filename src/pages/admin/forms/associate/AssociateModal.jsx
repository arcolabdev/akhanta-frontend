import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
<<<<<<< HEAD
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaEdit, FaTrash } from "react-icons/fa/";

function AssociateModal({ associateId, associateName }) {
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
        <Modal.Body>Seguro que deseas eliminar {associateName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
=======
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa/";

function AssociateModal({ associateId, associateName }) {
  const [show, setShow] = useState(false);

  const handleDelete = async (id) => {
    await axios
      .delete("http://akhanta.herokuapp.com/api/v1/associates/" + id)
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
>>>>>>> develop
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(associateId)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> develop
  );
}

export default AssociateModal;
