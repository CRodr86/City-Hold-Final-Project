import React from "react";
import "../../styles/proposals3.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import { HashLink } from "react-router-hash-link";
import ProposalsCard from "../component/ProposalsCard/ProposalsCard.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Services = () => {
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
                    tooltip="Bus and subway services"
                    imgSrc="https://img.icons8.com/ios/50/000000/get-on-bus.png"
                    text="Urban Buses"
                  />
                  <ProposalsCard
                    tooltip="Buildings construction and maintenance"
                    imgSrc="https://img.icons8.com/ios/50/000000/building-with-rooftop-terrace.png"
                    text="Buidings"
                  />
                  <ProposalsCard
                    tooltip="Traffic lights, streets way and traffic safety"
                    imgSrc="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-car-car-itim2101-lineal-itim2101-1.png"
                    text="Traffic"
                  />
                  <ProposalsCard
                    tooltip="Parks, squares and afforestation"
                    imgSrc="https://img.icons8.com/ios/50/000000/deciduous-tree.png"
                    text="Nature"
                  />
                  <ProposalsCard
                    tooltip="Bike lanes and cyclist safety"
                    imgSrc="https://img.icons8.com/dotty/50/000000/protected-bike-lane.png"
                    text="Cycling"
                  />
                  <ProposalsCard
                    tooltip="Streets maintenance"
                    imgSrc="https://img.icons8.com/ios/50/000000/crossroad.png"
                    text="Streets"
                  />
                  <ProposalsCard
                    tooltip="Trains stations, lines, maintenance..."
                    imgSrc="https://img.icons8.com/ios/50/000000/train-platform.png"
                    text="Trains"
                  />
                  <ProposalsCard
                    tooltip="Schools, colleges and universitys"
                    imgSrc="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png"
                    text="Education"
                  />
                  <ProposalsCard
                    tooltip="Schools, colleges and universitys"
                    imgSrc="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png"
                    text="Education"
                  />
                  <ProposalsCard
                    tooltip="Schools, colleges and universitys"
                    imgSrc="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png"
                    text="Education"
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
