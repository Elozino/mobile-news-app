import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(0);
  const [source, setSource] = useState();
  const [darkMode, setDarkMode] = useState(true);

  const fetchNews = async (reset = category) => {
    await fetch(getNewsAPI(reset))
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        // console.log(data);
        setIndex(1);
      })
      .catch((err) => console.error(err));
  };

  const fetchNewsFromSource = async () => {
    await fetch(getSourceAPI(source))
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        // console.log(data);
        setIndex(1);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsFromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        category,
        setCategory,
        index,
        setIndex,
        fetchNews,
        source,
        setSource,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default ContextProvider;
