import React, { useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiEdit } from "react-icons/bi";

const AssociateForm = ({ edit, associate }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inputs, setInputs] = useState([{ id: 0, url: "", tag: "INSTAGRAM" }]);
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const baseUrl = "https://akhanta.herokuapp.com/api/v1/associates/";

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => {
    if (associate) {
      setId(associate.id);
      setName(associate.name);
      setDescription(associate.description);
      setInputs(associate.links);
    }
    setShowEdit(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataBanner = new FormData();
    dataBanner.append("banner", banner);

    const dataProfile = new FormData();
    dataProfile.append("profile", profile);

    const links = inputs.map((input) => {
      return {
        url: input.url,
        tag: input.option,
      };
    });

    const payload = {
      name: name,
      description: description,
      links: links,
      user_id: 1,
    };

    let idResponse = 0;

    try {
      if (edit) {
        await axios
          .put(baseUrl + id, payload, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
            console.log("updated");
            idResponse = data.data.results.id;
          });
      }

      await axios
        .post(baseUrl, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          idResponse = data.data.results.id;
        });

      if (profile) {
        await axios.post(baseUrl + idResponse + "/profile", dataProfile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      if (banner) {
        await axios.post(baseUrl + idResponse + "/banner", dataBanner, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    } catch (error) {
      setIsSubmitting(false);
    }

    window.location.reload();
  };

  const addInput = () => {
    const newInput = { id: inputs.length, url: "", option: "INSTAGRAM" };
    setInputs((prevInputs) => [...prevInputs, newInput]);
  };

  const deleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const updateUrl = (id, url) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, url };
        } else {
          return input;
        }
      })
    );
  };

  const updateTag = (id, tag) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, tag };
        } else {
          return input;
        }
      })
    );
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
            Agregar Asociado
          </Button>
        )}
      </aside>
      <Modal show={showEdit} onHide={handleCloseEdit} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Asociado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Id</Form.Label>
              <Form.Control disabled type="text" value={id} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={4}
                style={{ resize: "none" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              {inputs.map((input, i) => (
                <div key={input.id} className="row mb-3">
                  <div className="col-sm-2">
                    <Form.Label>Link {i + 1}:</Form.Label>
                  </div>
                  <div className="col-sm-10 d-flex">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={input.url}
                      onChange={(e) => updateUrl(input.id, e.target.value)}
                    />

                    <div className="col-sm-2">
                      <Form.Select
                        onChange={(e) => updateTag(input.id, e.target.value)}
                      >
                        <option value="INSTAGRAM">Instagram</option>
                        <option value="WHATSAPP">WhatsApp</option>
                        <option value="FACEBOOK">Facebook</option>
                        <option value="TELEGRAM">Telegram</option>
                      </Form.Select>
                    </div>
                    {i === 0 && (
                      <div className="col-sm-1 d-flex align-items-center justify-content-center">
                        <Button
                          variant="primary"
                          type="button"
                          className="btn mx-1"
                          onClick={() => addInput()}
                        >
                          +
                        </Button>
                      </div>
                    )}

                    {i !== 0 && (
                      <div className="col-sm-1 d-flex  justify-content-center">
                        <Button
                          variant="danger"
                          className="btn mx-1"
                          onClick={() => deleteInput(input.id)}
                        >
                          -
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="formBanner" className="mb-3">
              <Form.Label>Imagen de banner</Form.Label>
              <Form.Control
                // required
                type="file"
                accept="image/*"
                onChange={(e) => setBanner(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group controlId="formProfile" className="mb-3">
              <Form.Label>Imagen de perfil</Form.Label>
              <Form.Control
                // required
                type="file"
                accept="image/*"
                onChange={(e) => setProfile(e.target.files[0])}
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
