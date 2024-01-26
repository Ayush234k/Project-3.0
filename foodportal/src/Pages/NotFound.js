import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/404.svg";
import Navbar from "../Components/Navbar";

export default function NotFound() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                textAlign: "center",
                top: "78px",
                marginBottom: "78px",
            }}
        >
            <img src={logo} alt="" style={{ width: "430px" }} />
            <br />
            <Link to={"/"}>
                <button style={{ margin: "20px" }}>
                    <h3>Back to Home </h3>
                </button>
            </Link>
        </div>
    );
}
