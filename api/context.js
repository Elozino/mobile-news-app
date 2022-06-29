import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(0);

  const fetchNews = async () => {
    const data = await axios.get(getNewsAPI(category));
    setNews(articles);
    setIndex(1);
    console.log(data);
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
