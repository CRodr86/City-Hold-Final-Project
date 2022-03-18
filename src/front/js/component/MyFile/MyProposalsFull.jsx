import React, { useContext } from "react";
import "./myProposals.css";
import PropTypes from "prop-types";
import MainButton from "../MainButton/MainButton.jsx";
import { Context } from "../../store/appContext.js";

const MyProposalsFull = (props) => {
  //Store variable
  const { store, actions } = useContext(Context);
  const proposal = store.proposal;

  //Text styling functions
  const firstCharToUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const cleanDate = (date) => {
    return date.split(" ", 4).join(" ");
  };

  return (
    <>
      <div className="row g-3 bg-white m-auto ps-5 pe-2 pb-5 text-start">
        <div className="table-responsive-md ">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="table_header">
                  Date
                </th>
                <th scope="col" className="table_header">
                  Id
                </th>
                <th scope="col" className="table_header">
                  Area
                </th>
                <th scope="col" className="table_header">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {proposal.map((item, i) => (
                <tr className="table_content" key={i}>
                  <td scope="row" data-title="Date">
                    {cleanDate(item.date)}
                  </td>
                  <td data-title="Type">
                    {firstCharToUpper(item.proposal_type) + item.id}
                  </td>
                  <td data-title="Area">{firstCharToUpper(item.area)}</td>
                  <td data-title="Description" className="table_content">
                    {firstCharToUpper(item.description)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col text-center mt-4">
          <MainButton buttonText="New proposal" to="/proposals-3" />
        </div>
      </div>
    </>
  );
};

MyProposalsFull.propTypes = {
  mainText: PropTypes.string,
};

export default MyProposalsFull;
