import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [nameerror, setNameerror] = useState();
  const [mailerror, setMailerror] = useState();
  const [paserror, setPaserror] = useState();
  const [conerror, setConerror] = useState();

  const name = React.useRef();
  const mail = React.useRef();
  const password = React.useRef();
  const confirm = React.useRef();

  const submit = (e) => {
    if (
      !nameerror &&
      !mailerror &&
      !paserror &&
      !conerror &&
      confirm.current.value === password.current.value &&
      password.current.value
    ) {
      alert("submited");
    } else {
      alert("fill required fields correctly");
    }
  };

  //name validation
  const namechange = (e) => {
    setNameerror("");
    const re = /^[A-Za-z]+$/;
    if (!re.test(name.current.value)) {
      setNameerror("letters only");
    }
  };

  //mail validation
  const mailchange = (e) => {
    setMailerror("");
    const mv = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!mv.test(mail.current.value)) {
      setMailerror("Invalid Email");
      // alert("Invalid Email");
    }
  };

  //password validation
  const passchange = (e) => {
    setPaserror("");
    if (password.current.value) {
      const str = password.current.value;
      if (
        str.match(/[a-z]/g) &&
        str.match(/[A-Z]/g) &&
        str.match(/[0-9]/g) &&
        str.match(/[^a-zA-Z\d]/g) &&
        str.length >= 8
      ) {
        console.log("ok");
      } else {
        setPaserror(
          <>
            At least 1 uppercase character.
            <br /> At least 1 lowercase character.
            <br /> At least 1 digit.
            <br /> 1 special character.
            <br /> At least 8 characters.
          </>
        );
      }
    }
    if (confirm.current.value) {
      if (confirm.current.value !== password.current.value) {
        setConerror("Password didn't match");
      } else {
        setConerror("");
      }
    }
  };

  //validate confirm passsword
  const conchange = (e) => {
    setConerror("");
    if (password.current.value !== confirm.current.value) {
      setConerror("Password didn't match");
    }
  };

  return (
    <div className="main-wrapper">
      <div className="login">
        <div>
          <label>User Name</label>
          <br />
          <input onChange={namechange} ref={name} type="text" />
          {nameerror ? <div className="error">{nameerror}</div> : ""}
        </div>

        <div>
          <label>Email Id</label>
          <br />
          <input onChange={mailchange} ref={mail} type="Email" />
          {mailerror ? <div className="error">{mailerror}</div> : ""}
        </div>

        <div>
          <label>Password</label>
          <br />
          <input onChange={passchange} ref={password} type="text" />
          {paserror ? <div className="error">{paserror}</div> : ""}
        </div>

        <div>
          <label>Confirm Password</label>
          <br />
          <input onChange={conchange} ref={confirm} type="text" />
          {conerror ? <div className="error">{conerror}</div> : ""}
        </div>

        <div>
          <button onClick={(e) => submit(e)}>Submit</button>
        </div>

        <div>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
