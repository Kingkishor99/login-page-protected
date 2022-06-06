import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import history from "./History";

function Login() {
  const ma = React.useRef();
  const pass = React.useRef();

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const submit = (e) => {
    if (getCookie("mail")) {
      history.push("/home");
    } else {
      history.push("/sign-in");
    }
  };

  useEffect(() => {
    ma.current.value = getCookie("mail");
    pass.current.value = getCookie("password");
  }, [getCookie("mail")]);

  return (
    <div className="main-wrapper">
      <div className="login">
        <div>
          <label>Email Id</label>
          <br />
          <input ref={ma} type="Email" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input ref={pass} type="text" />
        </div>
        <div>
          <button onClick={(e) => submit(e)}>Submit</button>
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
