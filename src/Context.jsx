import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState({});

  const baseUrl =
    "https://api.ar-colab.com:8443/api/v1/associates";
  const baseUrlPosts =
    "https://api.ar-colab.com:8443/api/v1/posts";


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
  
  useEffect(() => {
    axios
      .get(baseUrlPosts)
      .then((response) => {
        setArticles(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Context.Provider value={{ data, article, setArticle, articles, setArticles }}>{children}</Context.Provider>;
};
