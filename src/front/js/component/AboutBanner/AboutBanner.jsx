import React from "react";
import "./aboutBanner.css";
import{FaDesktop, FaPeopleArrows, FaBullseye} from "react-icons/fa";
import AboutUsBanner from "../../../img/AboutUsBanner.png";


const AboutBanner = () => {

//Style variables
const iconStyles = {
    color: "#F88500",
    display: "inline-block",
    margin: "5px",
    fontSize: "25px"
};

	return (
    <>
      <div className="container-fluid mt-1 mb-5" id="about_banner_wrapper" >
        <div className="row my-3"  > 
          <div className="col-md-8 p-2">
            <h5 id="section_title">About us</h5>
            <h2 id="section_subtitle">Keeping the city connected</h2>
            <ul className="fa-ul" id="about_banner_ul">
              <li className="about_li"> <FaDesktop className="fa-li" style={iconStyles}/> City-Hold is a digital platform for the cities. Is a way to comunicate between citizens and local governement</li>
              <li className="about_li"> <FaPeopleArrows className="fa-li" style={iconStyles}/>We are determined to facilitate and promote participation by creating a direct line of communication with local governments</li>
              <li className="about_li"> <FaBullseye className="fa-li" style={iconStyles}/>By allowing authorities to manage information more efficiently we aim to speed up the resolution of public problems</li>
            </ul>
          </div>
          <div className="col-4 d-none d-lg-block mt-5 img-fluid ">
              {/* <div className="square "> */}
              {/* <img src={AboutBannerImg1} alt="Street corssing people" id="about_img_1" /> */}
              <img src={AboutUsBanner} alt="Connected hands picture" />
              {/* </div> */}
              
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner