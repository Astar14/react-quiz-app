import React from 'react'
import brainImage from "../assets/brain-image.png";

const AdminLogin = () => {
  return (
      <>
          <section id="container">
      <div class="logo">
        <img src={brainImage} alt="brain" />
      </div>

      <div class="login-container">
        <h1>Admin Login</h1>
        <p>Please enter your details below.</p>

        <form onsubmit="adminLoginForm(event)">
          <div class="email">
            <label>Email ID <span>*</span></label>
            <input id="emailInput" type="text" placeholder="xyz14@gmail.com" />
          </div>
          <div class="password">
            <label>Password <span>*</span></label>
            <i id="eye-icon" class="icon fa-regular fa-eye-slash" onclick="eyeButtonToggle()"></i>
            <input id="password" class="passwordInput" type="password" placeholder="Password"/>
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