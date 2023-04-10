import React, { useState } from "react";
import "./popup.css";
function Login(props) {
  const [pass, setpass] = useState("");
  const [text, settext] = useState("");
  const [showpass, setshowpass] = useState(false);
  const [alert, setalert] = useState(false);
  const [alert2, setalert2] = useState(false);
  const [nameuser, setnameuser] = useState("");
  // let condition = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/login/userlogin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: text, password: pass })
    });
    const json = await response.json()
    if (json.success) {
      props.lh()
      localStorage.setItem('token', json.authtoken);
    }
    else {
      setalert(true);
    }
  };
  const handleSubmit1 = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/login/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: nameuser, email: text, password: pass })
    });
    const json = await response.json()
    // console.log(json);
    if (json.success) {
      // props.lh()
      props.setsign(false)
      // localStorage.setItem('token', json.authtoken);
      // console.log("hi")
    }
    else {
      setalert2(true);
    }
  };
  const handlechange = (event) => {
    settext(event.target.value);
  };
  const handlepass = (event) => {
    setpass(event.target.value);
  };
  const Namehandlechange = (event) => {
    setnameuser(event.target.value);
  }
  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      props.pop(false)
    }
  };
  if (alert || alert2) {
    setTimeout(() => {
      setalert(false);
      setalert2(false);
    }, 3000);
  }
  let eyepass = "password";
  if (showpass) {
    eyepass = "text";
    setTimeout(() => {
      setshowpass(false);
    }, 3000);
  }
  return (
    <div  >
      { props.signup === false && <div>      <button className="xbtn" onClick={ () => props.pop(false) }>
        <b>X</b>
      </button>
        <section className="login">
          <h3 className="heading">Login to your Account Here</h3>
          <p>Share your thoughts with world form the day</p>
          <form onSubmit={ handleSubmit }>
            <div className="cred">
              <label>
                <b>Email</b>
              </label>
              <br></br>
              <input
                type="email"
                placeholder="Enter your Email Address"
                onChange={ handlechange }
                required
              />
              <br></br>
              <label>
                <b>Password</b>
              </label>
              <br></br>
              <input
                type={ `${eyepass}` }
                placeholder="Enter passwrod" style={ { paddingRight: "30px" } }
                onChange={ handlepass }
                required
                minLength={ 5 }
              />
              <i
                className="far fa-eye"
                id="togglePassword"
                onClick={ () => setshowpass(!showpass) }
                style={ { marginLeft: "-30px", cursor: "pointer" } }></i>
              { alert && (
                <div className="alert">Incorrect UserName or Password</div>
              ) }
              <p>
                5+ letters with a mixture of both uppercase and <br></br>lowercase
                letters
              </p>
            </div>
            <button className="btn1" type="submit" >
              <b>Log In</b>
            </button>
          </form>
          <button className="secbutton" onClick={ () => { props.setsign(true) } }>
            <b>Sign Up</b>
          </button>
          <article className="terms">
            By Logging you are agree with our terms and conditons and privacy
            policy
          </article>
        </section>
      </div> }
      { props.signup === true && <div>
        <button className="xbtn" onClick={ () => props.pop(false) }>
          <b>X</b>
        </button>
        <section className="login">
          <h3 className="heading">Create your Account Here</h3>
          <p>Share your thoughts with world form the day</p>
          <form onSubmit={ handleSubmit1 }>
            <div className="cred">
              <label>
                <b>Name</b>
              </label>
              <br></br>
              <input
                type="text"
                placeholder="Enter your Name"
                onChange={ Namehandlechange }
                required
              />
              <br></br>
              <label>
                <b>Email</b>
              </label>
              <br></br>
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={ handlechange }
                required
              />
              { alert2 && (
                <div className="alert">Email already Registered</div>
              ) }
              <br>
              </br>
              <label>
                <b>Password</b>
              </label>
              <br></br>
              <input
                type={ `${eyepass}` }
                placeholder="Enter passwrod" style={ { paddingRight: "30px" } }
                onChange={ handlepass }
                required
                minLength={ 5 }
              />
              <i
                className="far fa-eye"
                id="togglePassword"
                onClick={ () => setshowpass(!showpass) }
                style={ { marginLeft: "-30px", cursor: "pointer" } }></i>
              <p>
                5+ letters with a mixture of both uppercase and <br></br>lowercase
                letters
              </p>
            </div>
            <button className="btn1" type="submit" >
              <b>Sign Up</b>
            </button>
          </form>
          <button className="secbutton" onClick={ () => { props.setsign(false) } }>
            <b>Log In</b>
          </button>
        </section>
      </div> }
    </div>
  );
}
export default Login;
