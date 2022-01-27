import React from "react";
import { Link } from "react-router-dom";
import "./myFile.css";
import PropTypes from "prop-types";
import MyAccountModal from "../MyAccountModal/MyAccountModal.jsx";
import MyProfile from "./MyProfile.jsx";
import MyProposalsEmpty from "./MyProposalsEmpty.jsx";
import MyFilePassword from "./MyFilePassword.jsx";



const MyFile = (props) => {
	return (
    <>
      <div className="container h-100 w-75 p-0 rounded" id="myfile_wrapper">
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills w-50"
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
              My Profile
            </button>
            <button
              class="profile_nav_btn nav-link text-start"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Change password
            </button>
            <button
              class="profile_nav_btn nav-link text-start"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              My proposals
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <MyProfile />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
            <MyFilePassword />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <MyProposalsEmpty />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyFile.propTypes = {


};


export default MyFile