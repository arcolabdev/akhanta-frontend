import React, { useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

function Formulario() {
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const baseUrl = "http://localhost:8080/api/v1/associates/";

    const dataBanner = new FormData();
    dataBanner.append("banner", banner);

    const dataProfile = new FormData();
    dataProfile.append("profile", profile);

    const payload = {
      name: "Wing Lam Kung Fu",
      description: "descripcion de wing lam",
      links: [
        { url: "instagram.com/winglamkungfu", type: "INSTAGRAM" },
        {
          url: "https://www.facebook.com/profile.php?id=100009079908064",
          type: "FACEBOOK",
        },
      ],
      user_id: 1,
    };

    const response = await axios.post(baseUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const uploadBanner = await axios.post(
      baseUrl + response.data.results.id + "/banner",
      dataBanner,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const uploadProfile = await axios.post(
      baseUrl + response.data.results.id + "/profile",
      dataProfile,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    // <div className="form-container">
    //   <form onSubmit={handleSubmit} className="form">
    //     <label className="form-label">
    //       Nombre:
    //       <input
    //         type="text"
    //         accept="image/*"
    //         onChange={(event) => setBanner(event.target.files[0])}
    //       />
    //     </label>
    //     <label className="form-label">
    //       Imagen Banner:
    //       <input
    //         type="file"
    //         accept="image/*"
    //         onChange={(event) => setBanner(event.target.files[0])}
    //       />
    //     </label>
    //     <br />
    //     <label className="form-label">
    //       Imagen Perfil:
    //       <input
    //         type="file"
    //         accept="image/*"
    //         onChange={(event) => setProfile(event.target.files[0])}
    //       />
    //     </label>
    //     <br />
    //     <button type="submit">Enviar</button>
    //   </form>
    // </div>

    <div className="container justify-content-center">
      <form>
        <div className="row mb-3 align-items-center">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Nombre:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" name="name" />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Descripción:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label htmlFor="url" className="col-sm-2 col-form-label">
            URL:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="url" name="url" />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
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
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
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
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
