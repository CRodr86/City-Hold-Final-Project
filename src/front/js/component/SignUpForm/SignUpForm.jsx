import React, { useState } from "react";
import FormInput from "../FormInput/FormInput.jsx";


const SignUpForm = () => {

  const initialValues = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    homePhone : "",
    mobilePhone : "",
    adress1 : "",
    adress2 : "",
    zipCode : "",
    yearsOfResidence : "",
  };

  const [input, setInput] = useState(initialValues);
  const inputTextChanger = ev => {
    const {name, value} = ev.target;
		setInput({...input, [name]: value,});
	};

  const addNewUser = () => {
    		fetch("https://3001-crodr86-cityholdfinalpr-xhpw0iaxvhj.ws-eu31.gitpod.io/api/user", {
    			method: "POST",
    			body: JSON.stringify(input),
          mode: "no-cors",
    			headers: { "Content-Type": "application/json" }
          
    		})
    			.then(response => {
    				return response.json();
    			})
    			.then(data => {
    				console.log(data);
    			})
    			.catch(error => {
    				console.log("Error", error);
    			});
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
        value={input.firstName}
        onChange={inputTextChanger}
        name="firstName"
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
        value={input.lastName}
        onChange={inputTextChanger}
        name="lastName"
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
        value={input.email}
        onChange={inputTextChanger}
        name="email"
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
        value={input.password}
        onChange={inputTextChanger}
        name="password"
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
        value={input.homePhone}
        onChange={inputTextChanger}
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
        value={input.mobilePhone}
        onChange={inputTextChanger}
        name="mobilePhone"
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
        value={input.adress1}
        onChange={inputTextChanger}
        name="adress1"
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
        value={input.adress2}
        onChange={inputTextChanger}
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
        value={input.zipCode}
        onChange={inputTextChanger}
        name="zipCode"
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
        value={input.yearsOfResidence}
        onChange={inputTextChanger}
        name="yearsOfResidence"
      />
    </form>
      <div class="col-12 d-flex justify-content-end">
        <button
          type="submit"
          class="btn btn-primary border-0 px-5 my-3"
          id="signUpButton"
          onClick={addNewUser}
        >
          Sign up
        </button>
      </div>
    </div>

    
  );
};

export default SignUpForm;
