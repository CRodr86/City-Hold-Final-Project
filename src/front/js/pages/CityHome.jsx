import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/Navbar/Navbar.jsx";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import PrivateCards from "../component/Cards/PrivateCards.jsx";
import AboutBanner from "../component/AboutBanner/AboutBanner.jsx";
import CounterBanner from "../component/CounterBanner/CounterBanner.jsx";
import "../../styles/home.css";
import TrendingNews from "../component/TrendingNews/TrendingNews.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";

const CityHome = () => {
  return (
    <>

      <PrivateCards />
     
    </>
  );
};

export default CityHome;