import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const baseUrl = "ec2-3-86-104-102.compute-1.amazonaws.com:8080/api/v1/associates";

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
