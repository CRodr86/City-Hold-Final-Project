import React, { useContext } from "react";
import { Context } from "../store/appContext";
import MainButton from "../component/MainButton/MainButton.jsx";
import { FaPhoneAlt, FaIdBadge, FaEnvelope } from "react-icons/fa";

const ReviewUser = (props) => {
  const iconStyles = {
    color: "#023047",
    display: "inline-block",
    margin: "5px",
    fontSize: "35px",
  };
  let bgImg = { background: "#023047", height: "max-content" };
  const { store, actions } = useContext(Context);

 
    return (
      <>
        <div className="container-fluid w-100" id="banner_wrapper">
          <div className="text-center py-4" id="bg-image" style={bgImg}>
            <h1 id="upper_banner_h1">User Details</h1>
            <div className="container">
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                  <div className="card border-white mb-3" key={props.key}>
                    <div className="card-header bg-transparent border-secondary">
                      {props.date}
                    </div>
                    <div className="card-body text-success">
                      <h5 className="card-title">
                        <FaIdBadge style={iconStyles} />{" "}
                        {store.name + " " + store.lastname}
                      </h5>
                    </div>
                    <div className="card-footer bg-transparent border-secondary">
                      <FaEnvelope style={iconStyles} />
                      {store.email}
                    </div>
                    <div className="card-footer bg-transparent border-secondary">
                      <FaPhoneAlt style={iconStyles} />
                      {store.homePhone + " / " + store.mobilePhone}
                    </div>
                  </div>
                </div>
                <div className="col-4"></div>
              </div>
            </div>

            <span>
              <MainButton to="/reviewproposals" buttonText="Back" />
            </span>
          </div>
        </div>
      </>
    );
  
};

export default ReviewUser;
