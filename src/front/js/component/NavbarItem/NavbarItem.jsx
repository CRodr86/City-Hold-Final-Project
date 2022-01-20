import React from "react";
import "./navbarItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <>
      <li className={props.liClassName} id="navitem">
        <Link
          className={props.aClassName}
          aria-current={props.ariaCurrent}
          to={props.to}
        >
          {props.pageName}
        </Link>
      </li>
    </>
  );
};

NavbarItem.propTypes = {
  liClassName: PropTypes.string,
  aClassName: PropTypes.string,
  ariaCurrent: PropTypes.string,
  to: PropTypes.string,
  pageName: PropTypes.string,
};

export default NavbarItem;
