import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NoEncryptionRoundedIcon from "@mui/icons-material/NoEncryptionRounded";
// import Signup from '../Signup/Signup';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/users/auth/", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log('error from Login.js', err));
  };

  const [action, setAction] = useState("Login");

  return (
    <>
      <div className="login-main">
        <div className="login-credentials">
          <div className="login-input">
            <h1>{action}</h1>
            <div className="login-input-2">
              <label id="required">Email</label>
              <div className="wrapper">
                <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label className="underline" id="required">
                Password
              </label>
              <div className="wrapper">
                <NoEncryptionRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className={action === "Login" ? "bt" : "bt"}
              onClick={handleSubmit} // Call handleSubmit on button click
            >
              {action}
            </button>
            <div className="Change">
              {action === "Sign Up" ? (
                <div>
                  <p>Already Have An Account?</p>
                  <Link
                    onClick={() => {
                      setAction("Login");
                    }}
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <div>
                  <p>Don't Have An Account?</p>
                  <Link
                    onClick={() => {
                      setAction("Sign Up");
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
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
export default Login;