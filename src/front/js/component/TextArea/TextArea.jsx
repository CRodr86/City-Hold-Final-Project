import React from "react";
import PropTypes from "prop-types";

const TextArea = (props) => {
  return (
    <div className="col">
      <label className="form-label">{props.label}</label>
      <textarea
        className="form-control"
        placeholder="Hint Text"
        id="textarea"
        onChange={props.onChange}
        value={props.value}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
