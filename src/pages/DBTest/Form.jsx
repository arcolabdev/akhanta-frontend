// import React, { useState } from "react";
// import axios from "axios";

// function Formulario() {
//   const [banner, setBanner] = useState(null);
//   const [profile, setProfile] = useState(null);
//   // const [image, setImage] = useState(null);
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const baseUrl = "http://localhost:8080/api/v1/associates/";

//     const dataBanner = new FormData();
//     dataBanner.append("banner", banner);

//     const dataProfile = new FormData();
//     dataProfile.append("profile", profile);

//     const payload = {
//       name: "Wing Lam Kung Fu",
//       description: "descripcion de wing lam",
//       links: [
//         { url: "instagram.com/winglamkungfu", type: "INSTAGRAM" },
//         {
//           url: "https://www.facebook.com/profile.php?id=100009079908064",
//           type: "FACEBOOK",
//         },
//       ],
//       user_id: 1,
//     };

    // const response = await axios.post(baseUrl, payload, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const uploadBanner = await axios.post(
    //   baseUrl + response.data.results.id + "/banner",
    //   dataBanner,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );

    // const uploadProfile = await axios.post(
    //   baseUrl + response.data.results.id + "/profile",
    //   dataProfile,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Imagen Banner:
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(event) => setBanner(event.target.files[0])}
//         />
//       </label>
//       <br />
//       <label>
//         Imagen Perfil:
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(event) => setProfile(event.target.files[0])}
//         />
//       </label>
//       <br />
//       <button type="submit">Enviar</button>
//       <br />
//       <img src="localhost:8080/api/v1/associates/2/banner" alt="asd" />
//     </form>
//   );
// }

// export default Formulario;
