import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NoEncryptionRoundedIcon from "@mui/icons-material/NoEncryptionRounded";
import Navbar from "../../Components/Navbar";
// import Signup from '../Signup/Signup';
// import Footer from '../../Components/Footer'
// import chef from '../../assets/Chef.png'
// import log1 from '../../assets/log1.jpg'

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/login", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const [action, setAction] = useState("Login");

  return (
    <>
    <Navbar/>
      <div className="login-main">
        <div className="login-credentials">
          <div className="login-input">
            <h1>Create Account</h1>
            <div className="login-input-2">
                <label className="email-label" id="required">
                  Full Name
                </label>
                <div className="wrapper">
                  <PersonIcon sx={{ fontSize: 27 }} className="MR" />
                  <input
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              <label id="required">Email</label>
              <div className="wrapper">
                <EmailRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label className="underline" id="required">
                Password
              </label>
              <div className="wrapper">
                <NoEncryptionRoundedIcon sx={{ fontSize: 27 }} className="MR" />
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className='bt'
              type="submit"
              onSubmit={handleSubmit}
            >
                SignUp
            </button>
            <div className="Change">
                <div>
                  <p>Don't Have An Account?</p>
                  <Link 
                  className="link"
                  to="/login">Login</Link>
                </div>
            </div>
          </div>
          <div className="login-image">
            <div className="image" />
            {/* <img src={ chef } alt='#'></img> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;