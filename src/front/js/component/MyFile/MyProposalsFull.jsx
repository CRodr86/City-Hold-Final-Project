import React from "react";
import { Link } from "react-router-dom";
import "./myProposals.css";
import PropTypes from "prop-types";
import MainButton from "../MainButton/MainButton.jsx";
import { HashLink } from 'react-router-hash-link';





const MyProposalsFull = (props) => {
	return (
    <>
      <div className="row g-3 bg-white m-auto ps-5 pe-2 pb-5 text-start">
        <div className="container"></div>
        <table class="table table-hover">
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
                Status
              </th>
              <th scope="col" className="table_header">
                Info
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table_content">
              <td>01/01/2022</td>
              <td>658742</td>
              <td>Education</td>
              <td className="text-warning fw-bold">Pending</td>
              <td>
                <HashLink to="/myfiledetails">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-warning px-3 mb-1 text-center"
                    id="btn_col"
                  >
                    More Info
                  </button>
                </HashLink>
              </td>
            </tr>
            <tr className="table_content">
              <td>10/09/2021</td>
              <td>632154</td>
              <td>Transport</td>
              <td className="text-success fw-bold">Approved</td>
              <td>
                <HashLink to="/myfiledetails">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-warning px-3 mb-1 text-center"
                    id="btn_col"
                  >
                    More Info
                  </button>
                </HashLink>
              </td>
            </tr>
            <tr className="table_content">
              <td>08/14/2021</td>
              <td>596214</td>
              <td>Nature</td>
              <td className="text-danger fw-bold">Rejected</td>
              <td>
                <HashLink to="/myfiledetails">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-warning px-3 mb-1 text-center"
                    id="btn_col"
                  >
                    More Info
                  </button>
                </HashLink>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="col text-center mt-4">
          <MainButton buttonText="New proposal" to="#" />
        </div>
      </div>
    </>
  );
};

MyProposalsFull.propTypes = {
    mainText: PropTypes.string,

};


export default MyProposalsFull