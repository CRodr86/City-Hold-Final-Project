import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";


const FooterLink = (props) => {
  return (
    <li className="nav-item mb-2">
      <HashLink
        className="nav-link p-0 text-muted footer-nav-link"
        to={props.to}
        data-bs-toggle={props.toggle}
        data-bs-target={props.target}
      >
        {props.pageName}
      </HashLink>
    </li>
  );
};

FooterLink.propTypes = {
  to: PropTypes.string,
  pageName: PropTypes.string,
  toggle: PropTypes.string,
  target: PropTypes.string,
};

export default FooterLink;
