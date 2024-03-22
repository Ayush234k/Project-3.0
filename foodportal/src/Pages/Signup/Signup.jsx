import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NoEncryptionRoundedIcon from "@mui/icons-material/NoEncryptionRounded";

import { signup } from "../../auth/index";
import { Navigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Signup = () => {
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { username, email, password, error, success } = values;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
        <Navbar />
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
              <div>
                <Button
                  className="btn"
                  type="submit"
                  onClick={(e) => {
                    onSubmit(e);
                    handleClick(e);
                  }}
                  sx={{
                    maxWidth: "25px",
                    height: "3.2rem",
                    borderRadius: "7px",
                    border: "none",
                    fontSize: "20px",
                    backgroundColor: "#7200eb",
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#5c00b3", // Adjust hover color if needed
                    },
                  }}
                >
                  Signup
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    New account created successfully. Please{" "}
                    <Link to="/login">Login</Link>here.
                  </Alert>
                </Snackbar>
              </div>
              <div className="Change">
                <div>
                  <p>Already Have An Account?</p>
                  <Link to="/login">Login</Link>
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
      {errorMessage()}
      {signUpForm()}
    </div>
  );
};
export default Signup;
