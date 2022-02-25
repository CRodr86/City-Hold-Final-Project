import React, {useContext} from "react";
import Logo from "../Logo/Logo.jsx";
import SignInModal from "../SIgnInModal/SignInModal.jsx";
import NavbarItem from "../NavbarItem/NavbarItem.jsx";
import "./navbar.css";
import { Context } from "../../store/appContext.js";
import MainButton from "../MainButton/MainButton.jsx";

const Navbar = () => {
  const {store, actions} = useContext(Context);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Logo width="45.33px" height="53.33px" viewBox="0 0 2.2 2.58" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link active"
                ariaCurrent="page"
                to="/"
                pageName="Home"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                to="/proposals"
                pageName="Proposals"
              ></NavbarItem>

              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                to="/projects"
                pageName="Projects"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                to="/publicvoting"
                pageName="Public Voting"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                to="/services"
                pageName="Services"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                to="/myfilehome"
                pageName="My File"
              />
              <NavbarItem
                liClassName="nav-item mx-2 me-5"
                aClassName="nav-link"
                to="/news"
                pageName="News"
              />
            </ul>
            {!store.token ? <div className="d-flex">
            <MainButton to="#" dataToggle="modal" dataTarget="#signInModal"  buttonText="Sign In"  />
            </div> :<div className="d-flex"> <MainButton buttonText="Logout" onClick={() => actions.logout()} to="/" 
              /> <p className=" mt-2 ms-3 mb-0">Welcome {store.name}</p> </div>
        
               
                }
            
          </div>
        </div>
      </nav>
      <SignInModal />
    </>
  );
};
export default Navbar;
