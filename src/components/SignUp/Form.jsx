import PropTypes from "prop-types";
import React from "react";

function Signup({ submitHandler }) {
  return (
    <div className="container">
        <h3>Sign Up to start saving your favorite movies</h3>
    <form className="form signup-form" onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="name-signup">Name:</label>
            <input className="form-input" type="text" id="name-signup" />
        </div>
        <div className="form-group">
            <label htmlFor="email-signup">Email:</label>
            <input className="form-input" type="text" id="email-signup" />
        </div>
        <div className="form-group">
            <label htmlFor="password-signup">Password:</label>
            <input className="form-input" type="password" id="password-signup" />
        </div>
        <div className="form-group">
            <button type="submit">Login</button>
        </div>
    </form>
    </div>
  );
}

Signup.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Signup;