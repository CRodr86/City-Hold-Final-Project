import React from "react";
import { Link } from "react-router-dom";
import "./cards.css"
import{FaCity, FaBusAlt, FaEnvelopeOpenText, FaFileAlt, FaIdBadge, FaPersonBooth, FaStore, FaUsersCog} from "react-icons/fa"
import{GiTeamIdea} from "react-icons/gi"
const iconStyles = {
    color: "#023047",
    display: "inline-block",
    margin: "5px",
    fontSize: "35px"
};

const Cards = () => {
	return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-4">
            <div class="card p-4 h-100">
              <div className="card-body">
                <h5 className="card-title"><FaEnvelopeOpenText style={iconStyles}/> Proposals</h5>
                <p className="card-text">
                We are glad to hear and resolve any proposal or claim that you may have. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card p-4 h-100">
              <div className="card-body">
                <h5 className="card-title"> <FaCity style={iconStyles}/> Projects</h5>
                <p className="card-text">
                Keep updated of all the offcial projects that are being developed in your city.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card p-4 h-100">
              <div className="card-body">
                <h5 className="card-title"> <FaPersonBooth style={iconStyles}/> Public Voting</h5>
                <p className="card-text">
                You are your city’s voice. Participate in the matters that are being put to vote.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-4">
            <div class="card p-4 h-100">
              <div className="card-body">
                <h5 className="card-title"> <FaBusAlt style={iconStyles}/> Services</h5>
                <p className="card-text">
                Transportation schedules and routes, city bike, park information and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div class="card p-4 h-100">
              <div className="card-body">
                <h5 className="card-title"> <FaIdBadge style={iconStyles}/> Citizen File</h5>
                <p className="card-text">
                Update and follow up the status of  your proposal or claim. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div class="card p-4 h-100">
              <div className="card-body">
                <h5 className="card-title"><FaStore style={iconStyles}/> City News</h5>
                <p className="card-text">
                Follow most recent and all the daily events of your city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards