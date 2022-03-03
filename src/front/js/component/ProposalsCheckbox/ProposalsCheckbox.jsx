import React from "react";
import PropTypes from "prop-types";

const ProposalsCheckbox = (props) => {
  return (
    <>
      {" "}
      <label className={props.upperLabelClassName}>
        {props.upperLabelText}
      </label>
      <div className={props.divClassName}>
        <input
          className={props.inputClassName}
          type={props.type}
          checked={props.checked}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          id={props.id}
        />
        <label className={props.elementLabelClassName} htmlFor={props.htmlFor}>
          {props.elementText}
        </label>
      </div>
    </>

    /* <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={props.checked}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            id="flexCheckClaim"
          />
          <label className="form-check-label" htmlFor="flexCheckClaim">
            Claim
          </label>
        </div> */
  );
};

ProposalsCheckbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  divClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  elementLabelClassName: PropTypes.string,
  htmlFor: PropTypes.string,
  elementText: PropTypes.string,
  upperLabelClassName: PropTypes.string,
};

export default ProposalsCheckbox;
