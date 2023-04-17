import React, { useState } from "react";
import axios from "axios";

function Formulario() {
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);
  const [tag, setTag] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("banner", banner);
    formData.append("tag", tag);

    const payload = {
      name: "Strong Nation",
      description: "descripcion de strong nation",
      links: ["instagram.com/akhanta.arg"],
      user_id: 1,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/associates/images",
        { formData, payload },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tag:
        <input
          type="text"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />
      </label>
      <br />
      <label>
        banner:
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setBanner(event.target.files[0])}
        />
      </label>
      <br />
      <label>
        profile:
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setProfile(event.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
