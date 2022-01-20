import React, { useContext } from "react";
import { Context } from "../store/appContext";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import Cards from "../component/Cards/Cards.jsx";
import AboutBanner from "../component/AboutBanner/AboutBanner.jsx";
import CounterBanner from "../component/CounterBanner/CounterBanner.jsx";
import "../../styles/home.css";
import TrendingNews from "../component/TrendingNews/TrendingNews.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";

const Home = () => {
  return (
    <>
      <UpperBanner
        primaryText="Participating has never been so easy."
        secondaryText="Get involved and keep informed of everything that is happening
                in our city."
        button={<MainButton buttonText="About us"/>}
      />
      <Cards />
      <AboutBanner />
      <TrendingNews />
      <CounterBanner />
    </>
  );
};

export default Home;
