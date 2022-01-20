import React from "react";
import "./navbarItem.css";
import PropTypes from "prop-types";

const NavbarItem = (props) => {
  return (
    <>
      <li className={props.liClassName}>
        <a
          className={props.aClassName}
          aria-current={props.ariaCurrent}
          to={props.to}
        >
          {props.pageName}
        </a>
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
