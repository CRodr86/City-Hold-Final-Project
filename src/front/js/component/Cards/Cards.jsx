import React from "react";
import { HashLink } from "react-router-hash-link";
import "./cards.css";
import {
  FaCity,
  FaBusAlt,
  FaEnvelopeOpenText,
  FaIdBadge,
  FaPersonBooth,
  FaStore,
} from "react-icons/fa";

const Cards = () => {
  //Icon style variable

  const iconStyles = {
    color: "#023047",
    display: "inline-block",
    margin: "5px",
    fontSize: "35px",
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 card_wrapper">
            <HashLink to={"/proposals"} style={{ textDecoration: "none" }}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    <FaEnvelopeOpenText style={iconStyles} /> Proposals
                  </h5>
                  <p className="card-text">
                    We are glad to hear and resolve any proposal or claim that
                    you may have.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>

          <div className="col-md-4 card_wrapper">
            <HashLink to={"/projects"} style={{ textDecoration: "none" }}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    {" "}
                    <FaCity style={iconStyles} /> Projects
                  </h5>
                  <p className="card-text">
                    Keep updated of all the offcial projects that are being
                    developed in your city.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>

          <div className="col-md-4 card_wrapper">
            <HashLink to={"/publicvoting"} style={{ textDecoration: "none" }}>
              {" "}
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    {" "}
                    <FaPersonBooth style={iconStyles} /> Public Voting
                  </h5>
                  <p className="card-text">
                    You are your city’s voice. Participate in the matters that
                    are being put to vote.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-4 card_wrapper">
            <HashLink to={"/services"} style={{ textDecoration: "none" }}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    {" "}
                    <FaBusAlt style={iconStyles} /> Services
                  </h5>
                  <p className="card-text">
                    Transportation schedules and routes, city bike, park
                    information and more.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>

          <div className="col-md-4 card_wrapper">
            <HashLink to={"/myfilehome"} style={{ textDecoration: "none" }}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    {" "}
                    <FaIdBadge style={iconStyles} /> Citizen File
                  </h5>
                  <p className="card-text">
                    Update and follow up the status of your proposal or claim.
                  </p>
                </div>
              </div>
            </HashLink>
          </div>

          <div className="col-md-4 card_wrapper">
            <HashLink to={"/news"} style={{ textDecoration: "none" }}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <h5 className="card-title-upper">
                    <FaStore style={iconStyles} /> City News
                  </h5>
                  <p className="card-text">
                    Follow most recent and all the daily events of your city.
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

export default Cards;
