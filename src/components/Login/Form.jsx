import PropTypes from "prop-types";
import React from "react";

function Form({ submitHandler }) {
  return (
    <div className="container">
        <h3>Login to see your movie library</h3>
    <form className="form login-form" onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="email-login">Email:</label>
            <input className="form-input" type="text" id="email-login" />
        </div>
        <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <input className="form-input" type="password" id="password-login" />
        </div>
        <div className="form-group">
            <button type="submit">Login</button>
        </div>
    </form>
    <a href="/signup">Sign Up</a>
    </div>
  );
}

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;