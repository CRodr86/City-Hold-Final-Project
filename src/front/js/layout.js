import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProposalsHome from "./pages/ProposalsHome.jsx";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import PublicVotingHome from "./pages/PublicVotingHome.jsx";
import PublicVotingAllVotes from "./pages/PublicVotingAllVotes.jsx"

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/proposals" component={ProposalsHome}/>
          <Route exact path="/publicvoting" component={PublicVotingHome}/>
          <Route exact path="/publicvotingselect" component={PublicVotingAllVotes}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
