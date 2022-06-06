import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="main-button">
      <Link to="/sign-in">
        <button>Sign In </button>
      </Link>

      <Link to="login">
        <button>Login </button>
      </Link>
    </div>
  );
}

export default Register;
