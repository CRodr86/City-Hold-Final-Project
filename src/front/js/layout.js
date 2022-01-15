import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./pages/home.jsx";

import injectContext from "./store/appContext";

import { Cards } from "./component/Cards/Cards.jsx";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Cards />
	
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
