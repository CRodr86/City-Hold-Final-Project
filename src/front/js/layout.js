import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Proposals1 from "./pages/Proposals1.jsx";
import Proposals2 from "./pages/Proposals2.jsx";
import Proposals3 from "./pages/Proposals3.jsx";
import Proposals4 from "./pages/Proposals4.jsx";
import Proposals5 from "./pages/Proposals5.jsx";
import PublicVotingHome from "./pages/PublicVotingHome.jsx";
import PublicVotingAllVotes from "./pages/PublicVotingAllVotes.jsx";
import PublicVotingSinglePoll from "./pages/PublicVotingSinglePoll.jsx";
import PublicVotingMultiPoll from "./pages/PublicVotingMultiPoll.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ProjectsHome from "./pages/ProjectsHome.jsx";
import MyFilePrivate from "./pages/MyFilePrivate.jsx";
import MyFileMoreInfo from "./pages/MyFileMoreInfo.jsx";
import Services from "./pages/Services.jsx";
import News from "./pages/News.jsx";
import MyFileHome from "./pages/MyFileHome.jsx";
import ThankYouSignIn from "./pages/ThankYouSignIn.jsx";
import CityPrivateArea from "./pages/CityPrivateArea.jsx";
import CityHome from "./pages/CityHome.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import ReviewProposals from "./pages/ReviewProposals.jsx";
import ReviewUser from "./pages/ReviewUser.jsx";
import PreviewProject1 from "./pages/PreviewProject1.jsx";

const Layout = () => {

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Switch>
          <Route exact path="/proposals" component={Proposals1} />
          <Route exact path="/proposals-2" component={Proposals2} />
          <Route exact path="/proposals-3" component={Proposals3} />
          <Route exact path="/proposals-4" component={Proposals4} />
          <Route exact path="/proposals-5" component={Proposals5} />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectsHome} />
          <Route exact path="/publicvoting" component={PublicVotingHome} />
          <Route
            exact
            path="/publicvotingselect"
            component={PublicVotingAllVotes}
          />
          <Route
            exact
            path="/publicvotingsinglepoll"
            component={PublicVotingSinglePoll}
          />
          <Route
            exact
            path="/publicvotingmultipoll"
            component={PublicVotingMultiPoll}
          />
          <Route exact path="/projectdetails" component={ProjectDetails} />
          <Route exact path="/myfileprivate" component={MyFilePrivate} />
          <Route exact path="/myfilehome" component={MyFileHome} />
          <Route exact path="/myfiledetails" component={MyFileMoreInfo} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/news" component={News} />
          <Route exact path="/welcome" component={ThankYouSignIn} />
          <Route exact path="/cityprivate" component={CityPrivateArea} />
          <Route exact path="/cityhome" component={CityHome} />
          <Route exact path="/createproject" component={CreateProject} />
          <Route exact path="/reviewproposals" component={ReviewProposals} />
          <Route exact path="/reviewuser" component={ReviewUser} />
          <Route exact path="/previewproject" component={PreviewProject1} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
