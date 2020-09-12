import React from "react";
import { loginUrl } from "../config/spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        alt="spotify logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <a href={loginUrl} className="login__button">
        Login with Spotify
      </a>
    </div>
  );
}

export default Login;
