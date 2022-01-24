import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PojectsHome from "./pages/ProjectsHome.jsx";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import PublicVotingHome from "./pages/PublicVotingHome.jsx";
import PublicVotingAllVotes from "./pages/PublicVotingAllVotes.jsx";
import PublicVotingSinglePoll from "./pages/PublicVotingSinglePoll.jsx";
import PublicVotingMultiPoll from  "./pages/PublicVotingMultiPoll.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ProjectsHome from "./pages/ProjectsHome.jsx";


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
          <Route exact path="/projects" component={ProjectsHome}/>
          <Route exact path="/publicvoting" component={PublicVotingHome}/>
          <Route exact path="/publicvotingselect" component={PublicVotingAllVotes}/>
          <Route exact path="/publicvotingsinglepoll" component={PublicVotingSinglePoll}/>
          <Route exact path="/publicvotingmultipoll" component={PublicVotingMultiPoll}/>
          <Route exact path="/projectdetails" component={ProjectDetails}/>
          <Route exact path="/thankyou" component={ThankYou}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
