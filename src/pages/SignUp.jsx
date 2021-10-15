import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/graphql/mutations"
import UserService from "../services/User";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try{
      const { data } = await addUser({
        variables: {...formState},
      });
      UserService.login(data.addUser.token)
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div className="container">
    <h3>Sign Up to start saving your favorite movies</h3>
<form className="form signup-form" onSubmit={handleFormSubmit}>
    <div className="form-group">
        <label htmlFor="name-signup">Name:</label>
        <input className="form-input" name="name" type="text" id="name-signup" value={formState.name} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label htmlFor="email-signup">Email:</label>
        <input className="form-input" name="email" type="email" id="email-signup" value={formState.email} onChange={handleChange} />
    </div>
    <div className="form-group">
        <label htmlFor="password-signup">Password:</label>
        <input className="form-input" name="password" type="password" id="password-signup" value={formState.password} onChange={handleChange} />
    </div>
    <div className="form-group">
        <button type="submit">Submit</button>
    </div>
</form>
</div>
  );
};

export default Signup;