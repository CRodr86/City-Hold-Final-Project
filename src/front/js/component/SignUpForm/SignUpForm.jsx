import React, { useState } from "react";
import FormInput from "../FormInput/FormInput.jsx";


const SignUpForm = () => {

  const [input, setInput] = useState("");
  const inputTextChanger = ev => {
		setInput(ev.target.value);
	};

  const addNewUser = () => {
    		fetch("https://3001-crodr86-cityholdfinalpr-xhpw0iaxvhj.ws-eu31.gitpod.io/api/user", {
    			method: "POST",
    			body: JSON.stringify(input),
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
        value={input}
        onChange={inputTextChanger}
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
