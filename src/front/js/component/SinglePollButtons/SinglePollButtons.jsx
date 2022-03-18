import React from "react";
import "./singlePollButtons.css";
import SinglePollItem from "./SinglePollItem.jsx";
import { BsCheckLg, BsXLg } from "react-icons/bs";

const SinglePollButtons = () => {
  //Icon style variable
  const iconStyles = {
    color: "#023047",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    fontSize: "40px",
    background: "none",
  };
  return (
    <>
      <div
        className="container h-100 w-75 p-0 py-3 rounded"
        id="buttons_wrapper"
      >
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-4 p-3" id="btn_yes">
            <SinglePollItem
              id="single_poll_item1"
              to={"/publicvotingmultipoll"}
              btnText="Yes"
              btnIcon={<BsCheckLg style={iconStyles} />}
            />
          </div>
          <div className="col-md-4 p-3" id="btn_no">
            <SinglePollItem
              id="single_poll_item2"
              to={"/thankyou"}
              btnText="No"
              btnIcon={<BsXLg style={iconStyles} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePollButtons;
