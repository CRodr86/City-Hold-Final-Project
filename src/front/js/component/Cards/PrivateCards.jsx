import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Context } from "../../store/appContext";
import "./cards.css";
import {
  FaCity,
  FaBusAlt,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaIdBadge,
  FaPersonBooth,
  FaStore,
  FaUsersCog,
} from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
const iconStyles = {
  color: "#023047",
  display: "inline-block",
  margin: "5px",
  fontSize: "35px",
};

const PrivateCards = () => {

const { store, actions } = useContext(Context);
  const getAllProposals = () => {
    actions.getAllProposals();
  
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 card_wrapper">
            <HashLink to={"/createvote"} style={{ textDecoration: "none" }}>
              {" "}
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    {" "}
                    <FaPersonBooth style={iconStyles} /> Add new Public Voting
                  </h5>
                  <p className="card-text">
                    In this section you can add new public votes.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>
          <div className="col-md-4 card_wrapper">
            <HashLink to={"/createproject"} style={{ textDecoration: "none" }}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    <FaEnvelopeOpenText style={iconStyles} /> Add a new Project
                  </h5>
                  <p className="card-text">
                    In this section you can add new city projects.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>

          <div className="col-md-4 card_wrapper">
            <HashLink to={"/reviewproposals"} style={{ textDecoration: "none" }} onClick={getAllProposals}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    {" "}
                    <FaCity style={iconStyles} /> Review Proposals
                  </h5>
                  <p className="card-text">
                    Access all user proposals database.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateCards;
