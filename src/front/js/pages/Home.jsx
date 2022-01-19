import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import TrendingNews from "../component/TrendingNews/TrendingNews.jsx";

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <TrendingNews />
    </>
  );
};
export default Home;
