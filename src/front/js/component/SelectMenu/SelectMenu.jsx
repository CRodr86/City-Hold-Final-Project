import React from "react";
import PropTypes from "prop-types";

const SelectMenu = (props) => {
  return (
    <div className="col mb-3">
      <label className="form-label">{props.label}</label>
      <select className={props.class} aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option valueName="1">{props.value1}</option>
        <option valueName="2">{props.value2}</option>
        <option valueName="3">{props.value3}</option>
      </select>
    </div>
  );
};

SelectMenu.propTypes = {
  label: PropTypes.string,
  class: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
};

export default SelectMenu;
