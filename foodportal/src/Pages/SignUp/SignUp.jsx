import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NoEncryptionRoundedIcon from "@mui/icons-material/NoEncryptionRounded";

import { signup } from "../../auth/index";
import { Navigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { username, email, password, error, success } = values;

  const handleChange = (username) => (event) => {
    setValues({ ...values, error: false, [username]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ username, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
            setValues({
              ...values,
              username: "",
              email: "",
              password: "",
              error: "",
              success: true,
            });
          }
      })
      .catch((err) => {
        console.log("Error in signup!", err);
      });
  };

  const signUpForm = () => {
    return (
      <>
      <Navbar/>
        <div className="login-main">
          <div className="login-credentials">
            <div className="login-input">
              <h1>Create Account</h1>
              <div className="login-input-2">
              <label id="required">Full Name</label>
                <div className="wrapper">
                  <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                  <input
                    value={username}
                    onChange={handleChange("username")}
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <label id="required">Email</label>
                <div className="wrapper">
                  <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                  <input
                    value={email}
                    onChange={handleChange("email")}
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <label className="underline" id="required">
                  Password
                </label>
                <div className="wrapper">
                  <NoEncryptionRoundedIcon
                    sx={{ fontSize: 27 }}
                    className="MR"
                  />
                  <input
                    value={password}
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange("password")}
                  />
                </div>
              </div>
              <button
                className='bt'
                type="submit"
                onClick={onSubmit}
              >
                Signup
              </button>
              <div className="Change">
                  <div>
                    <p>Already Have An Account?</p>
                    <Link to='/login'>
                      Login
                    </Link>
                  </div>
              </div>
            </div>
            <div className="login-image">
              <div className="image" />
            </div>
          </div>
        </div>
      </>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success col-md-6 offset-sm-3 text-left"
        style={{ display: success ? "" : "none" }}
      >
        New account was created successfully. Please
        <Link to="/signin">Login here</Link>.
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger col-md-6 offset-sm-3 text-left"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <div>
      {/* <Base title="Sign in page" description="A page for user to sign in!"> */}
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </div>
    // </Base>
  );
};
export default Signup;