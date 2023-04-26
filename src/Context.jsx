import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';


export const Context = createContext();


export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const [dataById, setDataById] = useState([]);
  // const { id } = useParams();


  useEffect(() => {
    axios
      .get("https://akhanta.herokuapp.com/api/v1/associates/")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://akhanta.herokuapp.com/api/v1/associates/${id}`)
  //     .then((response) => {
  //       setDataById(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
};
