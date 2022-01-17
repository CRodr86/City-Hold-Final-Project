import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../component/Cards/Cards.jsx";
import AboutBanner from "../component/AboutBanner/AboutBanner.jsx";


const Home = () => {

	return (
		<>
		<Cards/>
		<AboutBanner/>
		</>
	);
};

export default Home
