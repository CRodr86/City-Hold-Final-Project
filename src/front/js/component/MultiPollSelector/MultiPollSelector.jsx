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
          <div className="col-12 p-3 text-start">
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Tucson St.
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Main St. 
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Grant St. 
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                All of the above
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

MultiPollSelector.propTypes = {


};


export default MultiPollSelector