import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./myProposals.css";
import PropTypes from "prop-types";
import MainButton from "../MainButton/MainButton.jsx";
import { HashLink } from "react-router-hash-link";
import { Context } from "../../store/appContext.js";

const MyProposalsFull = (props) => {
const { store, actions } = useContext(Context);
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
                  Status
                </th>
                <th scope="col" className="table_header">
                  Info
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table_content">
                <td scope="row" data-title="Date">{store.date}</td>
                <td data-title="Id">658742</td>
                <td data-title="Area">{store.area}</td>
                <td data-title="Status" className="text-warning fw-bold">Pending</td>
                <td data-title="Info" >
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
              {/* <tr className="table_content">
                <td scope="row" data-title="Date">10/09/2021</td>
                <td data-title="Id">632154</td>
                <td data-title="Area">Transport</td>
                <td  data-title="Status" className="text-success fw-bold">Approved</td>
                <td data-title="Info">
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
                <td scope="row" data-title="Date">08/14/2021</td>
                <td data-title="Id">596214</td>
                <td data-title="Area">Nature</td>
                <td  data-title="Status" className="text-danger fw-bold">Rejected</td>
                <td data-title="Info">
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
              </tr> */}
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
