import React from "react";
import PropTypes from "prop-types";

const FooterLink = (props) => {
  return (
    <li className="nav-item mb-2">
      <a href={props.href} className="nav-link p-0 text-muted">
        {props.link}
      </a>
    </li>
  );
};

FooterLink.propTypes = {
  href: PropTypes.string,
  link: PropTypes.string,
};

export default FooterLink;
