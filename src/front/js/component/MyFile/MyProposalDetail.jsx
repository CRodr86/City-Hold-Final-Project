import React from "react";
import { HashLink } from "react-router-hash-link";
import "./myFile.css";
import PropTypes from "prop-types";
import MyAccountModal from "../MyAccountModal/MyAccountModal.jsx";
import MyProfile from "./MyProfile.jsx";
import MyProposalsEmpty from "./MyProposalsEmpty.jsx";
import MyFilePassword from "./MyFilePassword.jsx";
import MyProposalsFull from "./MyProposalsFull.jsx";
import MainButton from "../MainButton/MainButton.jsx";

const MyProposalDetail = (props) => {
  return (
    <>
      <div className="container h-100 w-75 p-0 rounded" id="myfile_wrapper">
        <div className="d-flex align-items-start ">
          <div
            className="nav flex-column nav-pills w-100"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="profile_nav_btn nav-link active text-start"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              My proposal details
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="row g-1 bg-white m-auto p-3 text-start w-100">
                <table className="table">
                  <thead>
                    <th scope="col" className="table_header pt-3">
                      Your proposal information
                    </th>
                  </thead>
                  <tbody>
                    <tr className="table_content">
                      <td>{props.description}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="col text-center mt-4">
                  <MainButton buttonText="Back" to="/myfileprivate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyProposalDetail.propTypes = {
  description: PropTypes.func,
};

export default MyProposalDetail;
