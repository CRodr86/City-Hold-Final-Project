import React from "react";
import "./footer.css";
import Logo from "../Logo/Logo.jsx";

const Footer = () => {
  return (
    <footer className="row row-cols-5 py-5 my-5 border-top footer">
      <div className="col"></div>

      <div className="col">
        <a
          href="/"
          className="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          <Logo width="34px" height="40px" viewBox="0 0 2.2 2.58" />
        </a>
        <p className="text-muted">© 2021</p>
      </div>

      <div className="col">
        <h5>Pages</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Proposals
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Projects
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Public Voting
            </a>
          </li>
        </ul>
      </div>

      <div className="col">
        <h5>Sign in</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              My Account
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Sign up
            </a>
          </li>
        </ul>
      </div>

      <div className="col">
        <h5>Contact us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              ICONS
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              city-hold@th.com
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              +34 915 581 158
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
