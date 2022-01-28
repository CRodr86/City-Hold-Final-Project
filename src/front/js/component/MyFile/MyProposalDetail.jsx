import React from "react";
import { HashLink } from 'react-router-hash-link';
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
        <div class="d-flex align-items-start ">
          <div
            class="nav flex-column nav-pills w-100"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="profile_nav_btn nav-link active text-start"
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
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="row g-1 bg-white m-auto p-3 text-start w-100">
                <table class="table ">
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_content">
                      <td>01/01/2022</td>
                      <td>658742</td>
                      <td>Education</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table">
                  <thead>
                    <th scope="col" className="table_header pt-3">
                      Your proposal information
                    </th>
                  </thead>
                  <tbody>
                    <tr className="table_content">
                      <td>
                        The proposal 654879 is being reviewed by the City’s
                        Transit Department. The response time is between 30 and
                        40 work days. Once this review is completed an email
                        will be sent to you with the final resolution.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="col text-center mt-4">
                  <MainButton buttonText="Back" to="/myfile" />
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


};


export default MyProposalDetail