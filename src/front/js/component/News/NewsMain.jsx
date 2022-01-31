import React from "react";
import { Link } from "react-router-dom";
// import "./myFile.css";
import PropTypes from "prop-types";
// import NewsCards from "./NewsCards.jsx";
import NewsCarousel from "./NewsCarousel.jsx"
import NewsCard from "../NewsCard/NewsCard.jsx";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import NewsCardsGrid from "./NewsCardsGrid.jsx";



const NewsMain = (props) => {
	return (
    <>
    <NewsCarousel />
    <NewsCardsGrid />
     
    </>
  );
};

NewsMain.propTypes = {


};


export default NewsMain