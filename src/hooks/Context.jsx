import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const baseUrl = "https://api.ar-colab.com:8443/api/v1/associates";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
};
