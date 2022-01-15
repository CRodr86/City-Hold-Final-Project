import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import SignInModal from "../SIgnInModal/SignInModal.jsx";
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
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Proposals
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Public Voting
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My File
                </a>
              </li>
              <li className="nav-item ms-2 me-5">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
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
