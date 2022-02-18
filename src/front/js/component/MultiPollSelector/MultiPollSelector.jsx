import React from "react";
import { Link } from "react-router-dom";
import "./multiPollSelector.css";
import PropTypes from "prop-types";

const MultiPollSelector = (props) => {
  return (
    <>
      <div
        className="container h-100 w-75 p-0 py-3 rounded"
        id="selector_wrapper"
      >
        <div className="row">
          <div className="col-12 p-3 text-center">
            <div
              className="btn-group-vertical gap-2 w-50"
              role="group"
              aria-label="Basic radio toggle button group"
              id="button_group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              />
              <label
                className="each_button btn btn-outline-primary rounded"
                for="btnradio1"
              >
                Tucson St.
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label
                className=" each_button btn btn-outline-primary rounded"
                for="btnradio2"
              >
                Main St.
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label
                className=" each_button btn btn-outline-primary rounded"
                for="btnradio3"
              >
                Grant St.
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio4"
                autocomplete="off"
              />
              <label
                className=" each_button btn btn-outline-primary rounded"
                for="btnradio4"
              >
                All of the above
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MultiPollSelector.propTypes = {};

export default MultiPollSelector;
