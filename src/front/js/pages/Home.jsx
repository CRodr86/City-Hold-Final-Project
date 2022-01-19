import React, { useContext } from "react";
import { Context } from "../store/appContext";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";



const Home = () => {

	return (
		<>
			<UpperBanner primaryText="Participating has never been so easy." secondaryText="Get involved and keep informed of everything that is happening
                in our city."/>
		</>
	);
};

export default Home
