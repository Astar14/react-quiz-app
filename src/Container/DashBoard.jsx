import React from 'react'
import techpaathshala from "../assets/techpaathshala.svg"
import userImage from "../assets/user_image.jpg"
import { Link } from 'react-router'

const DashBoard = () => {
  return (
      <>
        <header id="header">
        <div id="tech-logo">
          <a href="startquiz.html">
            {" "}
            <img
              src={techpaathshala}
              alt="techpaathsala"
            />
          </a>
        </div>

        <div className="right-side-info">
          <ul>
            <a href="startquiz.html">
              <li></li>
            </a>
            <li>Welcome,</li>
            <li>A</li>
            <img
              id="popup"
              onclick="popUp()"
              src={userImage}
              alt="userimage"
            />
          </ul>
        </div>
      </header>

      <main>
        <h1>Let's Start the Quiz</h1>
        <div className="time">
          <i className="fa-regular fa-clock"></i>
          <p>10 min</p>
        </div>
        <ul className="disclaimer">
          <li>disclaimers</li>
          <li>disclaimers</li>
        </ul>
        <section id="start-container">
          <div className="blank-display-container">
            <div className="blank-display">
              <img id="sms1" src="adminside/assets/sms (1).png" alt="" />
              <img id="sms2" src="adminside/assets/sms (2).png" alt="" />
              <img id="sms3" src="adminside/assets/sms (3).png" alt="" />
            </div>
            <div className="catchy-lines">
              <h2>"Test your knowledge with the ultimate quiz challenge!"</h2>
              <p>
                When you're done, review your answers and See <br />
                Your rank.
              </p>
            </div>
          </div>
         <Link to="/question"><button className="button" id="button">
            Start Quiz
          </button></Link> 
        </section>
      </main>

      <div id="logout-container">
        <p id="my-name">Hii, Amit</p>
        <p id="my-email">amit2546@gmail.com</p>
        <button id="logout-button" >
          Logout
        </button>
      </div>
      </>
  )
}

export default DashBoard