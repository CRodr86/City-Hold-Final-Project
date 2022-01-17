import React from "react";
import { Link } from "react-router-dom";
import "./aboutBanner.css"
import{FaDesktop, FaPeopleArrows, FaBullseye} from "react-icons/fa"

const iconStyles = {
    color: "#F88500",
    display: "inline-block",
    margin: "5px",
    fontSize: "25px"
};

const AboutBanner = () => {
	return (
    <>
      <div className="container" >
        <div className="row my-3" id="about_banner_wrapper" > 
          <div className="col-8 p-2">
            <h5 id="section_title">About us</h5>
            <h2 id="section_subtitle">Keeping the city connected</h2>
            <ul className="fa-ul" id="about_banner_ul">
              <li> <FaDesktop className="fa-li" style={iconStyles}/> Town-Hold is a digital platform for the cities. Is a way to comunicate between citizens and local governement</li>
              <li> <FaPeopleArrows className="fa-li" style={iconStyles}/>We are determined to facilitate and promote participation by creating a direct line of communication with local governments</li>
              <li> <FaBullseye className="fa-li" style={iconStyles}/>By allowing authorities to manage information more efficiently we aim to speed up the resolution of public problems</li>
            </ul>
          </div>
          <div className="col-4 justify-content-center">
              <div className="square"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner