import React from "react";
import { Link } from "react-router-dom";
import "./singlePollButtons.css";
import SinglePollItem from "./SinglePollItem.jsx";
import PropTypes from "prop-types";
import{BsCheckLg, BsXLg, BsCheck, BsCheck2} from "react-icons/bs";

const iconStyles = {
    color: "#023047",
    justifyContent: "center",
    display:"flex",
    flexDirection: "column",
    margin:"auto",
    fontSize: "40px",
    background: "none"
};



const SinglePollButtons = (props) => {
	return (
    <>
      <div className="container h-100 w-75 p-0 py-3 rounded" id="buttons_wrapper">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-4 p-3" id="btn_yes">
            <SinglePollItem  to={"/publicvotingmultipoll"} btnText="Yes" btnIcon={<BsCheckLg  style={iconStyles} />}   />
          </div>
          <div className="col-md-4 p-3" id="btn_no">
            <SinglePollItem  to={"/thankyou"} btnText="No"  btnIcon={<BsXLg  style={iconStyles} />}/>
          </div>
        </div>
      </div>
    </>
  );
};

SinglePollButtons.propTypes = {


};


export default SinglePollButtons