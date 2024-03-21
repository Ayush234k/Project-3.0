import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NoEncryptionRoundedIcon from "@mui/icons-material/NoEncryptionRounded";

import { signin, authenticate, isAuthenticated } from "./../../auth/index";
import { Navigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Login = () => {
  const [action, setAction] = useState("Login");
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => {
        console.log("Sign in failed");
      });
  };

  const performRedirect = () => {
    console.log(isAuthenticated());
    if (didRedirect) {
      if (user && user.isAdmin) {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/user/dashboard" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const logInForm = () => {
    return (
      <>
      <Navbar/>
        <div className="login-main">
          <div className="login-credentials">
            <div className="login-input">
              <h1>Login</h1>
              <div className="login-input-2">
                <label id="required">Email</label>
                <div className="wrapper">
                  <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                  <input
                    value={email}
                    onChange={handleChange("email")}
                    type="email"
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                    onChange={handleChange("password")}
                  />
                </div>
              </div>
              <button
                className='bt'
                type="submit"
                onClick={onSubmit}
              >
              Login
              </button>
              <div className="Change">
                  <div>
                    <p>Don't Have An Account?</p>
                    <Link to='/signup'>
                      SignUp
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

  return (
    <div>
      {/* <Base title="Sign in page" description="A page for user to sign in!"> */}
      {loadingMessage()}
      {errorMessage()}
      {logInForm()}
      {performRedirect()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </div>
    // </Base>
  );
};
export default Login;