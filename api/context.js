import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(0);

  const fetchNews = async () => {
    await fetch(getNewsAPI("general"))
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider
      value={{
        news,
        category,
        index,
        setIndex,
        fetchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default ContextProvider;
