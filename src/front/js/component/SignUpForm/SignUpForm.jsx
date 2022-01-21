import React from "react";
import FormInput from "../FormInput/FormInput.jsx";

const SignUpForm = () => {
  return (
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
      />
    </form>
  );
};

export default SignUpForm;
