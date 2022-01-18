import React from "react";
import PropTypes from "prop-types";
import "./counterBanner.css";


const CounterElement = (props) => {
	return (
    <>
            <div className="col-md-3" id="counter_elem">
                <h2 className="count">{props.count}</h2>
                <p className="text">{props.text}</p>
            </div>

    </>
  );
};

CounterElement.propTypes = {
	count: PropTypes.number,
	text: PropTypes.string
};

export default CounterElement