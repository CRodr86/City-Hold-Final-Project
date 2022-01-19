import React from "react";
import PropTypes from "prop-types";
import "./counterBanner.css";
import CountUp from 'react-countup';



const CounterElement = (props) => {
	return (
    <>
      <div className="col-md-3" id="counter_elem">
        <CountUp className="count" end={props.count} prefix={props.prefix} />
        <p className="text">{props.text}</p>
      </div>
    </>
  );
};



CounterElement.propTypes = {
	count: PropTypes.number,
	text: PropTypes.string,
  prefix: PropTypes.string
};

export default CounterElement