import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { Table } from "react-bootstrap";
import AssociateModal from "./AssociateModal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AssociateForm = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);
  const [inputs, setInputs] = useState([
    { id: 0, url: "", option: "INSTAGRAM" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [validated, setValidated] = useState(false);

  const baseUrl = "https://akhanta.herokuapp.com/api/v1/associates/";

  useEffect(() => {
    axios.get(baseUrl).then((response) => setData(response.data.results));
  }, []);

  const handleSubmit = async (event) => {
    console.log("Handle submit running");
    event.preventDefault();
    if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
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
      console.log("Associate POST");
      await axios
        .post(baseUrl, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          idResponse = data.data.results.id;
          console.log(idResponse);
        });

      await axios.post(baseUrl + idResponse + "/profile", dataProfile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await axios.post(baseUrl + idResponse + "/banner", dataBanner, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setCompleted(true);
    } catch (error) {
      setIsSubmitting(false);
    }
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

  const updateOption = (id, option) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, option };
        } else {
          return input;
        }
      })
    );
  };

  if (completed) {
    window.location.reload();
  }

  return (
    <section>
      <h1>Asociados</h1>
      <article className="form-container-div">
        <Form validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Id</Form.Label>
            <Form.Control
              disabled
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            {inputs.map((input) => (
              <div key={input.id} className="row mb-3">
                <div className="col-sm-2">
                  <Form.Label>Link {input.id + 1}:</Form.Label>
                </div>
                <div className="col-sm-10 d-flex">
                  <Form.Control
                    required
                    type="text"
                    className="form-control"
                    value={input.url}
                    onChange={(event) =>
                      updateUrl(input.id, event.target.value)
                    }
                  />

                  <div className="col-sm-2">
                    <Form.Select
                      value={input.option}
                      onChange={(event) =>
                        updateOption(input.id, event.target.value)
                      }
                    >
                      <option value="INSTAGRAM">Instagram</option>
                      <option value="WHATSAPP">WhatsApp</option>
                      <option value="FACEBOOK">Facebook</option>
                      <option value="TELEGRAM">Telegram</option>
                    </Form.Select>
                  </div>
                  {input.id === 0 && (
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

                  {input.id !== 0 && (
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
              required
              type="file"
              accept="image/*"
              onChange={(e) => setBanner(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group controlId="formProfile" className="mb-3">
            <Form.Label>Imagen de perfil</Form.Label>
            <Form.Control
              required
              type="file"
              accept="image/*"
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        {isSubmitting && <ScaleLoader color="#36d7b7" />}
      </article>
      <br />
      <hr />
      <br />
      <article>
        <Table>
          <thead>
            <tr>
              <th>#</th>
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
                    <td>{index + 1}</td>
                    <td>{associate.name}</td>
                    <td>{associate.description.substring(0, 111) + "..."}</td>
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
                            {link.url}
                            <br />
                          </a>
                        );
                      })}
                    </td>
                    <td>
                      <AssociateModal associateId={associate.id} associateName={associate.name} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </article>
    </section>
  );
};

export default AssociateForm;
