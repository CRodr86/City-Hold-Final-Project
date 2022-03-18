import React from "react";
import MainButton from "../component/MainButton/MainButton.jsx";
import FormInput from "../component/FormInput/FormInput.jsx";

const CityPrivateArea = (props) => {

//Style variable
  let bgImg = { background: "#023047" };

  return (
    <>
      <>
        <div className="container-fluid w-100" id="banner_wrapper">
          <div className="row " id="upper-b-elem">
            <div className="col-12 ">
              <div className="text-center" id="bg-image" style={bgImg}>
                <h1 id="upper_banner_h1">
                  This area is for City Officials use only.
                </h1>
                <p id="upper_banner_p">
                  If you are a citizen please sign in or create a new account.
                  If you are a city official and you want to create a new
                  account, please contact us.
                </p>
                <form className="row g-3">
                  <FormInput
                    divClassName="mb-2"
                    inputType="email"
                    inputClassName="form-control-private"
                    inputId="formEmail"
                    inputPlaceholder="Email"
                  />
                  <FormInput
                    divClassName="mb-3"
                    inputType="password"
                    inputClassName="form-control-private"
                    inputId="formPassword"
                    inputPlaceholder="Password"
                  />
                </form>
                <span>
                  <MainButton to="/cityhome" buttonText="Access Private Area" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CityPrivateArea;
