import React from "react";
import PropTypes from "prop-types";
import "./proposalsCard.css";

const ProposalsCard = (props) => {
  return (
    <div className={props.class}>
      <div
        className="card text-center mb-4 proposalsCard"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={props.tooltip}
      >
        <input
          type="radio"
          className="btn-check"
          name={props.name}
          id={props.inputId}
          autoComplete="off"
          checked={props.checked}
          value={props.value}
          onChange={props.onChange}
        />
        <label className="btn cardButton" htmlFor={props.labelFor}>
          <div className="card-body">
            <img src={props.imgSrc} />
            <p className="card-text">{props.text}</p>
          </div>
        </label>
      </div>
    </div>
  );
};

ProposalsCard.propTypes = {
  tooltip: PropTypes.string,
  inputId: PropTypes.string,
  labelFor: PropTypes.string,
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  class: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ProposalsCard;
