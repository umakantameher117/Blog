import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
        <p className="line">Don't have an Account? Register Here </p>
        <Link to="/register" className="link">
          <button className="loginRegButton">Register</button>
        </Link>
      </form>
    </div>
  );
}
