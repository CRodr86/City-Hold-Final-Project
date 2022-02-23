import React from "react";
import { Link } from "react-router-dom";
import "./counterBanner.css";
import CounterElement from "./CounterElement.jsx";

const CounterBanner = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-5" id="counter_banner_wrapper">
        <div className="row">
          <div className="col-12 text-center">
            <h2 id="counter_banner_title">
              Let’s keep improving your quality of life
            </h2>
            <p id="counter_banner_text">
              Your participation helps us make better and more efficient
              decisions{" "}
            </p>
          </div>
        </div>
        <div
          className="row text-center d-flex justify-content-center"
          id="numbers_row"
        >
          <CounterElement count={1000} text="Registered Citizens" prefix="+" />
          <CounterElement
            count={300}
            text="Solved proposals and claims"
            prefix="+"
          />
          <CounterElement count={12} text="Held Public Votes " prefix="" />
        </div>
      </div>
    </>
  );
};

export default CounterBanner;
