import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import SignInModal from "../SIgnInModal/SignInModal.jsx";
import NavbarItem from "../NavbarItem/NavbarItem.jsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Logo width="68px" height="80px" viewBox="0 0 2.2 2.58" />
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
                href="#"
                pageName="Home"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                href="#"
                pageName="Proposals"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                href="#"
                pageName="Projects"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                href="#"
                pageName="Public Voting"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                href="#"
                pageName="Services"
              />
              <NavbarItem
                liClassName="nav-item mx-2"
                aClassName="nav-link"
                href="#"
                pageName="My File"
              />
              <NavbarItem
                liClassName="nav-item mx-2 me-5"
                aClassName="nav-link"
                href="#"
                pageName="News"
              />
              <div className="dropdown ms-5">
                <a
                  className="btn btn-secondary dropdown-toggle border-0"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sign in
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#signInModal"
                    >
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign up
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <SignInModal />
    </>
  );
};
export default Navbar;
