import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { Table } from "react-bootstrap";
import AssociateModal from "./AssociateModal";

const AssociateForm = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);
  const [inputs, setInputs] = useState([
    { id: 0, texto: "", opcion: "INSTAGRAM" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios
      .get("http://akhanta.herokuapp.com/api/v1/associates/")
      .then((response) => setData(response.data.results));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const baseUrl = "http://akhanta.herokuapp.com/api/v1/associates/";

    const dataBanner = new FormData();
    dataBanner.append("banner", banner);

    const dataProfile = new FormData();
    dataProfile.append("profile", profile);

    const links = inputs.map((input) => {
      return {
        url: input.texto,
        tag: input.opcion,
      };
    });

    const payload = {
      name: name,
      description: description,
      links: links,
      user_id: 1,
    };

    try {
      console.log("Associate POST");
      const newAssociateResponse = await axios.post(baseUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      await axios.post(
        baseUrl + newAssociateResponse.data.results.id + "/banner",
        dataBanner,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      await axios.post(
        baseUrl + newAssociateResponse.data.results.id + "/profile",
        dataProfile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCompleted(true);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  const agregarInput = () => {
    const newInput = { id: inputs.length, texto: "", opcion: "INSTAGRAM" };
    setInputs((prevInputs) => [...prevInputs, newInput]);
  };

  const eliminarInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const actualizarTexto = (id, texto) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, texto };
        } else {
          return input;
        }
      })
    );
  };

  const actualizarOpcion = (id, opcion) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, opcion };
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
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Nombre:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3 ">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Descripción:
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                style={{ resize: "none" }}
                id="description"
                name="description"
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          {inputs.map((input) => (
            <div key={input.id} className="row mb-3">
              <div className="col-sm-2">
                <label htmlFor="url" className="col-form-label">
                  Link {input.id + 1}:
                </label>
              </div>
              <div className="col-sm-10 d-flex">
                <input
                  className="form-control"
                  value={input.texto}
                  onChange={(event) =>
                    actualizarTexto(input.id, event.target.value)
                  }
                />
                <div className="col-sm-2">
                  <select
                    className="form-select"
                    value={input.opcion}
                    onChange={(event) =>
                      actualizarOpcion(input.id, event.target.value)
                    }
                  >
                    <option value="INSTAGRAM">Instagram</option>
                    <option value="WHATSAPP">WhatsApp</option>
                    <option value="FACEBOOK">Facebook</option>
                    <option value="TELEGRAM">Telegram</option>
                  </select>
                </div>
                {input.id === 0 && (
                  <div className="col-sm-1 d-flex align-items-center justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary mx-1"
                      onClick={() => agregarInput()}
                    >
                      +
                    </button>
                  </div>
                )}

                {input.id !== 0 && (
                  <div className="col-sm-1 d-flex  justify-content-center">
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => eliminarInput(input.id)}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="row mb-3">
            <label htmlFor="banner-image" className="col-sm-2 col-form-label">
              Imagen de banner:
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="banner-image"
                name="banner-image"
                accept="image/*"
                onChange={(event) => setBanner(event.target.files[0])}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="profile-image" className="col-sm-2 col-form-label">
              Imagen de perfil:
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="profile-image"
                name="profile-image"
                accept="image/*"
                onChange={(event) => setProfile(event.target.files[0])}
              />
            </div>
          </div>
          <input
            id="submit"
            type="submit"
            className="btn btn-outline-success"
            value="Enviar"
          ></input>
        </form>
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
                      <AssociateModal />
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
