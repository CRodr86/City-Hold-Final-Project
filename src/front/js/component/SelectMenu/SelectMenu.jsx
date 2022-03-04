import React from "react";
import PropTypes from "prop-types";

const SelectMenu = (props) => {
  return (
    <div className="col mb-3">
      <label className="form-label">{props.label}</label>
      <select
        className={props.class}
        aria-label="Default select example"
        onChange={props.onChange}
      >
        <option selected={props.selected}>Open this select menu</option>
        <option valueName={props.valueName1} selected={props.selected1}>
          {props.value1}
        </option>
        <option valueName={props.valueName2} selected={props.selected2}>
          {props.value2}
        </option>
        <option valueName={props.valueName3} selected={props.selected3}>
          {props.value3}
        </option>
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
  selected: PropTypes.string,
  valueName1: PropTypes.string,
  valueName2: PropTypes.string,
  valueName3: PropTypes.string,
  onChange: PropTypes.string,
  selected1: PropTypes.string,
  selected2: PropTypes.string,
  selected3: PropTypes.string,
};

export default SelectMenu;
