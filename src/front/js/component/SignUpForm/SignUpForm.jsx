import React, { useState, useContext } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import { Context } from "../../store/appContext.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {
  // const initialValues = {
  //   name : "",
  //   lastname : "",
  //   email : "",
  //   password : "",
  //   homePhone : "",
  //   mobilePhone : "",
  //   address1 : "",
  //   address2 : "",
  //   zipCode : "",
  //   yearsOfResidence : "",
  // };

  // const [input, setInput] = useState(initialValues);
  // const inputTextChanger = ev => {
  //   const {name, value} = ev.target;
  // 	setInput({...input, [name]: value});
  // };

  // const addNewUser = () => {
  //   		fetch("https://3001-crodr86-cityholdfinalpr-eb9ve4vhd3q.ws-eu32.gitpod.io/api/user", {
  //   			method: "POST",
  //   			body: JSON.stringify(input),
  //         mode: "no-cors",
  //   			headers: { "Content-Type": "application/json" }

  //   		})
  //   			.then(response => {
  //   				return response.json();
  //   			})
  //   			.then(data => {
  //   				console.log(data);
  //   			})
  //   			.catch(error => {
  //   				console.log("Error", error);
  //   			});
  //   	};

  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [yearsOfResidence, setYearsOfResidence] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();

    actions.createNewUser(
      name,
      lastname,
      email,
      password,
      homePhone,
      mobilePhone,
      address1,
      address2,
      zipCode,
      yearsOfResidence
    );
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
    setHomePhone("");
    setMobilePhone("");
    setAddress1("");
    setAddress2("");
    setZipCode("");
    setYearsOfResidence("");
    history.push("/welcome");
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-signUp"
      role="tabpanel"
      aria-labelledby="pills-signUp-tab"
    >
      <form className="row g-3">
        <FormInput
          divClassName="col-md-6"
          labelFor="formFirstName"
          labelClassName="form-label"
          labelText="First name"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Type your first name"
          inputAriaLabel="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="firstName"
          required={true}
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formLastName"
          labelClassName="form-label"
          labelText="Last name"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Type your last name"
          inputAriaLabel="Last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          name="lastName"
          required={true}
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formEmail2"
          labelClassName="form-label"
          labelText="Email"
          inputType="email"
          inputClassName="form-control"
          inputPlaceholder="Email"
          inputAriaLabel="Email2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required={true}
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formPassword2"
          labelClassName="form-label"
          labelText="Password"
          inputType="password"
          inputClassName="form-control"
          inputPlaceholder="Password"
          inputAriaLabel="Password2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required={true}
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formHomePhone"
          labelClassName="form-label"
          labelText="Home Phone"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Home phone number"
          inputAriaLabel="homePhone"
          value={homePhone}
          onChange={(e) => setHomePhone(e.target.value)}
          name="homePhone"
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formMobilePhone"
          labelClassName="form-label"
          labelText="Mobile Phone"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Mobile phone number"
          inputAriaLabel="mobilePhone"
          value={mobilePhone}
          onChange={(e) => setMobilePhone(e.target.value)}
          name="mobilePhone"
          required={true}
        />
        <FormInput
          divClassName="col-12"
          labelFor="formAdress1"
          labelClassName="form-label"
          labelText="Adress (line 1)"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Type your adress"
          inputAriaLabel="adress1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          name="adress1"
          required={true}
        />
        <FormInput
          divClassName="col-12"
          labelFor="formAdress2"
          labelClassName="form-label"
          labelText="Adress (line 2)"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Type your adress"
          inputAriaLabel="adress2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          name="adress2"
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formZipCode"
          labelClassName="form-label"
          labelText="Zip Code"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Zip Code"
          inputAriaLabel="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          name="zipCode"
          required={true}
        />
        <FormInput
          divClassName="col-md-6"
          labelFor="formYearsOfResidence"
          labelClassName="form-label"
          labelText="Years of residence"
          inputType="text"
          inputClassName="form-control"
          inputPlaceholder="Years of residence"
          inputAriaLabel="yearsOfResidence"
          value={yearsOfResidence}
          onChange={(e) => setYearsOfResidence(e.target.value)}
          name="yearsOfResidence"
          required={true}
        />
        <div className="col-12 d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary border-0 px-5 my-3"
            id="signUpButton"
            onClick={handleSignUp}
            data-bs-dismiss="modal"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
