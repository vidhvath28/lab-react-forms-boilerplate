import React, { useState } from "react";
import "./App.css";

export default function App() {

  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  return (
    <div className="formContainer">
      <form className="registerForm" onSubmit={(e)=>{
          e.preventDefault()
          if(field.firstName && field.lastName && field.email && field.phoneNumber)
          setValidation(true)
          setSubmit(true)
        }}>

        {submitted && validate?<div className="successMessage">Registration succesfull!</div>:null}

        <input
          id="first-name"
          className="formField"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={field.firstName}
          onChange={(e)=>{
            setField({...field, firstName:e.target.value})
          }}
        />

        {submitted && !field.firstName ?<span>Please enter your first name</span>:null}
      
        <input
          id="last-name"
          className="formField"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={field.lastName}
          onChange={(e)=>{
            setField({...field, lastName:e.target.value})
          }}
        />

        {submitted && !field.lastName ?<span>Please enter your last name</span>:null}
       
        <input
          id="email"
          className="formField"
          type="text"
          placeholder="Email"
          name="email"
          value={field.email}
          onChange={(e)=>{
            setField({...field, email:e.target.value})
          }}
        />

        {submitted && !field.email ?<span>Please enter your email</span>:null}

        <input
          id="Phone number"
          className="formField"
          type="text"
          placeholder="Phone number"
          name="phone number"
          value={field.phoneNumber}
          onChange={(e)=>{
            setField({...field, phoneNumber:e.target.value})
          }}
        />

        {submitted && !field.phoneNumber ?<span>Please enter your phone number</span>:null}

        <button className="formField" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}