// import PropTypes from "prop-types";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/graphql/mutations"
import UserService from "../services/User";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      UserService.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="container">
        <h3>Login to see your movie library</h3>
    <form className="form login-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
            <label htmlFor="email-login">Email:</label>
            <input className="form-input" name="email" type="email" id="email-login" value={formState.email} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <input className="form-input" type="password" name="password" id="password-login" value={formState.password} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <button type="submit">Login</button>
        </div>
    </form>
    </div>
  );
}

// Login.propTypes = {
//   submitHandler: PropTypes.func.isRequired,
// };

export default Login;