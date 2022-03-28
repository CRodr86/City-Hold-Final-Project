import React from "react";
import PropTypes from "prop-types";

const TextArea = (props) => {
  return (
    <div className="col">
      <label className={props.labelClassName}>{props.label}</label>
      <textarea
        className={props.className}
        placeholder="Type Here..."
        id="textarea"
        onChange={props.onChange}
        value={props.value}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
};

export default TextArea;
