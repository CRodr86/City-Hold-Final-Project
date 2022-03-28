import React from "react";
import PropTypes from "prop-types";

const ProposalUserCard = (props) => {
  return (
    <>
      <div className="card border-white mb-3 h-100" >
        <div className="card-header bg-transparent border-secondary">
          {props.date}
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">
            {props.proposal_type} Id Nº {props.proposal_id}
          </h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">Neighborhood: {props.document_type}</p>
        </div>
        <div className="card-footer bg-transparent border-secondary">
          <div className="col"> Made by user Nº {props.proponent} </div>
          <div className="col"> {props.btn} </div>
        </div>

        <div className="card-footer bg-transparent border-secondary">
          Send info about proposal by {props.contact}
        </div>
        <div className="card-footer bg-transparent border-secondary">
          Send info about city events by {props.confirmation}
        </div>
      </div>
    </>
  );
};

ProposalUserCard.propTypes = {
  date: PropTypes.func,
  proposal_type: PropTypes.func,
  description: PropTypes.func,
  contact: PropTypes.func,
  confirmation: PropTypes.func,
  key: PropTypes.func,
  proponent: PropTypes.func,
  btn: PropTypes.func,
  document_type: PropTypes.func,
  proposal_id: PropTypes.func,
};

export default ProposalUserCard;
