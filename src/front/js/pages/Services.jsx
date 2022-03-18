import React from "react";
import "../../styles/proposals3.css";
import ProposalsCard from "../component/ProposalsCard/ProposalsCard.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";


const Services = () => {

//Style variable 
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};
  return (
    <>
      <div className="container-fluid w-100 proposals1-body" style={bgImg}>
        <div className="row d-flex justify-content-center">
          <div className="col-8 text-center mt-5">
            <h3 id="proposals1Header">
              Access the web pages of the main services of your city
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-xl-8 col-lg-10 col-md-10 col-12 form-bg pt-5 pb-4 px-4 mb-5 rounded-3">
            <div className="row justify-content-center mt-1">
              <div className="col">
                <div className="row d-flex justify-content-center row-cols-lg-5 row-cols-md-2 row-cols-2">
                  <ProposalsCard
                    tooltip="Bus hours and routes information"
                    imgSrc="https://img.icons8.com/ios/50/000000/get-on-bus.png"
                    text="Buses"
                  />
                  <ProposalsCard
                    tooltip="Subway information"
                    imgSrc="https://img.icons8.com/ios/50/000000/train-platform.png"
                    text="Subway"
                  />
                  <ProposalsCard
                    tooltip="Taxes consulting and payment"
                    imgSrc="https://img.icons8.com/ios/50/000000/general-ledger.png"
                    text="Taxes"
                  />
                  <ProposalsCard
                    tooltip="Employment Office"
                    imgSrc="https://img.icons8.com/ios/50/000000/parse-from-clipboard.png"
                    text="Employment"
                  />
                  <ProposalsCard
                    tooltip="Education office"
                    imgSrc="https://img.icons8.com/ios/50/000000/book-and-pencil.png"
                    text="Education"
                  />
                  <ProposalsCard
                    tooltip="Police Office"
                    imgSrc="https://img.icons8.com/ios/50/000000/police-badge.png"
                    text="Police"
                  />
                  <ProposalsCard
                    tooltip="Fire Department"
                    imgSrc="https://img.icons8.com/ios/50/000000/fire-hydrant.png"
                    text="Fire Dpt"
                  />
                  <ProposalsCard
                    tooltip="Health"
                    imgSrc="https://img.icons8.com/ios/50/000000/hospital-3.png"
                    text="Health"
                  />
                  <ProposalsCard
                    tooltip="Culture"
                    imgSrc="https://img.icons8.com/ios/50/000000/theatre-mask.png"
                    text="Culture"
                  />
                  <ProposalsCard
                    tooltip="Sports"
                    imgSrc="https://img.icons8.com/ios/50/000000/olympic-rings.png"
                    text="Sports"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
