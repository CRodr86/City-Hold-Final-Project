import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import MainButton from "../component/MainButton/MainButton.jsx";
import FormInput from "../component/FormInput/FormInput.jsx";
import { useHistory } from "react-router-dom";

const CityPrivateArea = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const cityToken = sessionStorage.getItem("jwt-token");

  const citySignIn = (e) => {
    e.preventDefault();
    actions.citySignIn(email, password);
  };

  //Style variable
  let bgImg = { background: "#023047" };

 if (cityToken && cityToken != "" && cityToken != undefined){
    history.push("/cityhome")
  }

  return (
    <>
      <>
        <div className="container-fluid w-100" id="banner_wrapper">
          <div className="row " id="upper-b-elem">
            <div className="col-12 ">
              <div className="text-center p-5 h-100" style={bgImg}>
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
                    inputPlaceholder="User Name"
                    onChange={(ev) => setEmail(ev.target.value)}
                    value={email}
                  />
                  <FormInput
                    divClassName="mb-3"
                    inputType="password"
                    inputClassName="form-control-private"
                    inputId="formPassword"
                    inputPlaceholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    value={password}
                  />
                </form>
                <span>
                  <MainButton
                    to="/cityhome"
                    buttonText="Access Private Area"
                    onClick={citySignIn}
                  />
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
