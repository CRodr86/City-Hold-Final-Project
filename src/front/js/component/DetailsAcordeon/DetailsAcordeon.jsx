import React from "react";
import "./detailsAcordeon.css";
import PropTypes from "prop-types";



const DetailsAcordeon = (props) => {
	return (
    <>
      <div
        className="container h-100 w-75 p-0 py-3 rounded"
        id="acordeon_wrapper"
      >
        <div className="accordion accordion-flush m-3 " id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header " id="flush-headingOne">
              <button
                className="accordion-button mb-2 rounded-3 collapsed  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {props.acordeonTitle1}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{props.acordeonText1}</div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button mb-2 rounded-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                {props.acordeonTitle2}
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{props.acordeonText2}</div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button mb-2 rounded-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                {props.acordeonTitle3}
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{props.acordeonText3}</div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button mb-2 rounded-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                {props.acordeonTitle4}
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{props.acordeonText4}</div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button mb-2 rounded-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                {props.acordeonTitle5}
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{props.acordeonText5}</div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button rounded-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                {props.acordeonTitle6}
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{props.acordeonText6}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailsAcordeon.propTypes = {
    acordeonTitle1: PropTypes.string,
    acordeonTitle2: PropTypes.string,
    acordeonTitle3: PropTypes.string,
    acordeonTitle4: PropTypes.string,
    acordeonTitle5: PropTypes.string,
    acordeonTitle6: PropTypes.string,
    acordeonText1: PropTypes.string,
    acordeonText2: PropTypes.string,
    acordeonText3: PropTypes.string,
    acordeonText4: PropTypes.string,
    acordeonText5: PropTypes.string,
    acordeonText6: PropTypes.string,
};


export default DetailsAcordeon