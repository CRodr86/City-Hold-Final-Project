import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../component/Cards/Cards.jsx";
import AboutBanner from "../component/AboutBanner/AboutBanner.jsx";
import CounterBanner from "../component/CounterBanner/CounterBanner.jsx";


const Home = () => {

	return (
		<>
		<Cards/>
		<AboutBanner/>
		<CounterBanner/>
		</>
	);
};

export default Home
