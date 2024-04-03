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
        <div className="signup-main">
          <div className="signup-credentials">
            <div className="signup-input">
              <h1>Create an account</h1>
              <div className="signup-input-2">
                <label id="signup-required">Full Name</label>
                <div className="signup-wrapper">
                  <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                  <input
                    value={username}
                    onChange={handleChange("username")}
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <label id="signup-required">Email</label>
                <div className="signup-wrapper">
                  <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                  <input
                    value={email}
                    onChange={handleChange("email")}
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <label className="signup-underline" id="signup-required">
                  Password
                </label>
                <div className="signup-wrapper">
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
                  className="signup-btn"
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
                    <Link 
                      id="link"
                      to="/login">Login</Link>here.
                  </Alert>
                </Snackbar>
              </div>
              <div className="signup-Change">
                <div>
                  <p>Already Have An Account?</p>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
            <div className="login-image">
            <div className="image">
                <h2 id="login-highlight">Welcome to</h2><br/>
                <h1>EcoDine 2.0</h1><br/>
                <p>
                Here at EcoDine, we're on a mission to revolutionize the way we approach meals in our hostel mess, making every bite count towards a more sustainable future. With just a few clicks, you can help us reduce food wastage by selecting the days you plan to skip a meal. It's simple, it's effective, and it's a step towards a healthier planet.
                <br/><br/>

                <p id="login-highlight">New to EcoDine?</p>Sign up today and join our community of eco-conscious diners. Together, we can make a difference, one meal at a time.
                <br/><br/>

                <p id="login-highlight">Already a member?</p>Log in to manage your meal plans and continue making impactful choices.
                <br/><br/>
                <p id="login-highlight">"Saving Food, Nurturing Futures"</p>
                <br/>
                Thank you for being a part of our journey towards sustainability. Let's make every meal matter! 
                </p>
              </div>
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
