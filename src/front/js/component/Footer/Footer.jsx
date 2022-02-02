import React, { Fragment } from "react";
import "./footer.css";
import Logo from "../Logo/Logo.jsx";
import FooterLink from "../FooterLink/FooterLink.jsx";
import FooterIcons from "../FooterIcons/FooterIcons.jsx";

const Footer = () => {
  return (
    <footer className=" pt-5 pb-3 border-top footer">
      <div className="container">
        <div className="row row-cols-lg-5 row-cols-md-2 row-cols-2">
          <div className="col">
            <a href="/" className="mb-3 link-dark text-decoration-none">
              <Logo width="34px" height="40px" viewBox="0 0 2.2 2.58" />
            </a>
            <p className="text mt-2">Keep the city connected</p>
          </div>
          <div className="col d-none d-lg-block"></div>
          <div className="col d-none d-lg-block">
            <h5 className="footerLabel">Pages</h5>
            <ul className="nav flex-column">
              <FooterLink to="/" pageName="Home" />
              <FooterLink to="/proposals" pageName="Proposals" />
              <FooterLink to="/projects" pageName="Projects" />
              <FooterLink to="/publicvoting" pageName="Public Voting" />
            </ul>
          </div>
          <div className="col d-none d-lg-block">
            <h5 className="footerLabel">Sign in</h5>
            <ul className="nav flex-column">
              <FooterLink to="myfile" pageName="My Account" />
              <FooterLink
                toggle="modal"
                target="#signInModal"
                pageName="Sign up"
              />
            </ul>
          </div>
          <div className="col">
            <h5 className="footerLabel">Contact us</h5>
            <ul className="nav flex-column">
              <FooterIcons />
              <FooterLink to="#" pageName="city-hold@th.com" />
              <FooterLink to="#" pageName="+34 915 581 158" />
            </ul>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 mt-2">
          <div className="col d-flex justify-content-lg-start justify-content-md-center justify-content-center">
            <p>Copyright © 2021 Town-Hold Team</p>
          </div>
          <div className="col d-flex justify-content-lg-end justify-content-md-center justify-content-center">
            <a href="#" className="d-inline nav-link p-0 text-muted">
              Privacy Policy
            </a>
            <a href="#" className="d-inline mx-3 nav-link p-0 text-muted">
              Terms of Use
            </a>
            <a href="#" className="d-inline nav-link p-0 text-muted">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
