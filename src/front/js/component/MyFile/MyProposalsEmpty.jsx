import React from "react";
import "./myProposals.css";
import MainButton from "../MainButton/MainButton.jsx";





const MyProposalsEmpty = () => {
	return (
    <>
      <div className="row g-3 bg-white m-auto px-5 pb-5 text-start w-100">
        <div className="col-md-12 text-center">
          <p id="proposal_title">You have not sent any proposals yet</p>
        </div>
        <div className="col text-center mt-4"><MainButton buttonText="New proposal" to="/proposals-3"/></div>
      </div>
    </>
  );
};




export default MyProposalsEmpty