import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main-wrapper">
      <div className="login">
        <div>
          <label>Email Id</label>
          <br />
          <input type="Email" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
        {/* New to Page */}
        <div>
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
