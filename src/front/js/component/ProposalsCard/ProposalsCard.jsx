import React from "react";
import PropTypes from "prop-types";

const ProposalsCard = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-6">
      <div
        class="card text-center mb-4 proposalsCard"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={props.tooltip}
      >
        <div className="card-body">
          <img src={props.imgSrc} />
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

ProposalsCard.propTypes = {
  tooltip: PropTypes.string,
  imgSrc: PropTypes.string,
  text: PropTypes.string,
};

export default ProposalsCard;