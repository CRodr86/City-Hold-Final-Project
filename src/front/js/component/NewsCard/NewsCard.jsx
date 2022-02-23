import React from "react";
import PropTypes from "prop-types";

const NewsCard = (props) => {
  return (
    <div className="card border-0 me-4 smallCard rounded-0">
      <img
        src={props.imgSrc}
        className="card-img-top rounded-0 "
        alt={props.imgAlt}
      />
      <div className="card-body bg-white">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
};

export default NewsCard;
