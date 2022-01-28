import React from "react";
import PropTypes from "prop-types";
import "./counterBanner.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const CounterElement = (props) => {
	return (
    <>
      <div className="col-md-3" id="counter_elem">
        <CountUp className="count" end={props.count} prefix={props.prefix}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="count_item" ref={countUpRef} />
            </VisibilitySensor>
        )}</CountUp>
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