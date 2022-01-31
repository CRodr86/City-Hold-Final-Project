import React, { Fragment } from "react";
import "./footer.css";
import Logo from "../Logo/Logo.jsx";
import FooterLink from "../FooterLink/FooterLink.jsx";

const Footer = () => {
  return (
    <footer className=" pt-5 pb-3 border-top footer">
      <div className="container">
        <div className="row row-cols-5">
          <div className="col">
            <a href="/" className="mb-3 link-dark text-decoration-none">
              <Logo width="34px" height="40px" viewBox="0 0 2.2 2.58" />
            </a>
            <p className="text mt-2">Keep the city connected</p>
          </div>
          <div className="col"></div>
          <div className="col">
            <h5 className="footerLabel">Pages</h5>
            <ul className="nav flex-column">
              <FooterLink href="#" link="Home" />
              <FooterLink href="#" link="Proposals" />
              <FooterLink href="#" link="Projects" />
              <FooterLink href="#" link="Public Voting" />
            </ul>
          </div>
          <div className="col">
            <h5 className="footerLabel">Sign in</h5>
            <ul className="nav flex-column">
              <FooterLink href="#" link="My Account" />
              <FooterLink href="#" link="Sign up" />
            </ul>
          </div>
          <div className="col">
            <h5 className="footerLabel">Contact us</h5>
            <ul className="nav flex-column">
              <FooterLink href="#" link="ICONS" />
              <FooterLink href="#" link="city-hold@th.com" />
              <FooterLink href="#" link="+34 915 581 158" />
            </ul>
          </div>
        </div>
        <div className="row row-cols-2 mt-2">
          <div className="col">
            <p>Copyright © 2021 Town-Hold Team</p>
          </div>
          <div className="col d-flex justify-content-end">
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
