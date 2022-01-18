import React from "react";
import { Link } from "react-router-dom";
import "./counterBanner.css";
import CounterElement from "./CounterElement.jsx";




const CounterBanner = () => {
	return (
    <>
      <div className="container my-5 py-2" id="counter_banner_wrapper" >
        <div className="row my-3"  > 
          <div className="col-12 text-center pt-4">
            <h2 id="counter_banner_title">Let’s keep improving your quality of life</h2>
            <p id="counter_banner_text">Your participation helps us make better and more efficient decisions </p>
          </div>
        </div>
        <div className="row text-center d-flex justify-content-center" id="numbers_row">
            <CounterElement  count={9000} text="Registered Citizens" style={{"border": "#e5e5e5 solid 1px"}}/>
            <CounterElement  count={300} text="Solved proposals and claims"/>
            <CounterElement  count={12} text="Held Public Votes "/>
        </div>
      </div>
    </>
  );
};

export default CounterBanner