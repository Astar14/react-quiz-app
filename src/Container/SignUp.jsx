import React from "react";
import brainImage from "../assets/brain-image.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUserRequest } from "../store/user/userAction";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [eyeToggle, setEyeToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUpForm = (e) => {
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!fullName || !email || !password) {
      alert("All fields are mandatory please enter");
      return;
    }
    if (!fullName || fullName.length < 4) {
      alert("Fullname is mandatory and minimum four letter please enter");
      return;
    }
    if (!namePattern.test(fullName)) {
      alert("Full name should only contain letters and spaces.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Enter a proper email");
      return;
    }
    if (!password || password.length < 8) {
      alert("Password is mandatory upto 8 length please enter");
      return;
    } else if (!passwordPattern.test(password)) {
      alert(
        "Password should contain one capital letter one number and special character"
      );
      return;
    }
    if (emailExists) {
      alert("This email is already registered. Please use a different email.");
      return;
    } else if (passwordExists) {
      alert("This password is already exist. Please use a different password.");
      return;
    }
    if (!checkBox) {
      alert("Accept the terms and conditions");
      return;
    } else {
      alert("Successfully registered...");
      dispatch(addUserRequest({ fullName, email, password }));
      navigate("/");
    }
    console.log(fullName, email, password);
  };

  return (
    <>
      <section id="container">
        <div className="logo">
          <img src={brainImage} alt="brainimg" />
        </div>
        <div className="signup-container">
          <h1>Signup</h1>
          <p>Sign up to Join</p>

          <form onSubmit={handleSignUpForm}>
            <div className="email">
              <label>
                Full Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="fullname"
                type="text"
                value={fullName}
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="email">
              <label>
                Email ID<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="email"
                value={email}
                type="email"
                placeholder="xyz14@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label>
                Password<span style={{ color: "red" }}>*</span>
              </label>
              {eyeToggle ? (
                <FaEye className="icon" onClick={() => setEyeToggle(false)} />
              ) : (
                <FaEyeSlash className="icon" onClick={() => setEyeToggle(true)}/>
              )}

              <input
                id="password"
                value={password}
                type={eyeToggle ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>

          <div className="sign-up-with-google">
            <img src="adminside/assets/google-logo.png" alt="" />
            <p>Sign up with Google</p>
          </div>
          <div className="terms-condition">
            <input
              id="checkbox"
              type="checkbox"
              onChange={() => setCheckBox(true)}
            />
            <p>
              I accept <span>Terms & Conditions</span>
            </p>
          </div>
          <div className="login-account">
            <p>Don't have an account?</p>
            <a href="index.html">Login</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
