import React, { useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiEdit } from "react-icons/bi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AssociateForm = ({ edit, article }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const baseUrl =
    "https://api.ar-colab.com:8443/api/v1/posts";

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => {
    if (article) {
      setId(article.id);
      setTitle(article.title);
      setContent(article.description);
    }
    setShowEdit(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataImage = new FormData();
    dataImage.append("image", image);

    const token = localStorage.getItem("token");

    const payload = {
      title: title,
      content: content,
      user_id: 1,
    };

    const associateHeader = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const imageHeader = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    let idResponse = 0;

    try {
      if (edit) {
        await axios
          .put(`${baseUrl}/${id}`, payload, associateHeader)
          .then((data) => {
            idResponse = data.data.id;
          });
        if (image) {
          await axios.put(
            `${baseUrl}/${idResponse}/image`,
            dataImage,
            imageHeader
          );
        }
      } else {
        await axios.post(baseUrl, payload, associateHeader).then((data) => {
          idResponse = data.data.results.id;
        });
      }
      if (image) {
        await axios.post(
          `${baseUrl}/${edit ? id : idResponse}/profile`,
          dataImage,
          imageHeader
        );
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }

    // window.location.reload();
  };

  return (
    <section>
      <aside style={{ display: "flex", gap: "1rem" }}>
        {edit ? (
          <Button variant="primary" onClick={handleShowEdit}>
            <BiEdit />
          </Button>
        ) : (
          <Button variant="success" onClick={handleShowEdit}>
            Agregar Artículo
          </Button>
        )}
      </aside>
      <Modal show={showEdit} onHide={handleCloseEdit} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Artículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Id</Form.Label>
              <Form.Control disabled type="text" value={id} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Contenido</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(e, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Imagen de articulo</Form.Label>
              <Form.Control
                // required
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {isSubmitting && <ScaleLoader color="#36d7b7" />}
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default AssociateForm;
