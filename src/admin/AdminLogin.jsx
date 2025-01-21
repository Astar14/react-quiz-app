import React, { useState } from 'react'
import brainImage from "../assets/brain-image.png";
import { useNavigate } from 'react-router';

const AdminLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert("All fields are mandatory please enter")
      return;
    }
    else if (email === "admin@gmail.com" && password === "Admin@123") {
      alert("Successfully login")
      navigate("/admindashboard")
    }
  }

  return (
      <>
          <section id="container">
      <div class="logo">
        <img src={brainImage} alt="brain" />
      </div>

      <div class="login-container">
        <h1>Admin Login</h1>
        <p>Please enter your details below.</p>

        <form onSubmit={handleSubmit}>
          <div class="email">
            <label>Email ID <span>*</span></label>
            <input id="emailInput" type="text" value={email} placeholder="xyz14@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div class="password">
            <label>Password <span>*</span></label>
            <i id="eye-icon" class="icon fa-regular fa-eye-slash" onclick="eyeButtonToggle()"></i>
            <input id="password" value={password} class="passwordInput" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button class="button" type="submit">Login</button>
        </form>

        <div class="sign-up-with-google">
          <img src="assets/google-logo.png" alt="" />
          <p>Sign up with Google</p>
        </div>
        <div class="create-account">
          <p>Don't have an account?</p>
          <a href="signup.html">Sign up?</a>
        </div>
      </div>
    </section>
      </>
  )
}

export default AdminLogin