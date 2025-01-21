import React from 'react'
import smsone from "../assets/sms (1).png"
import smstwo from "../assets/sms (2).png"
import smsthree from "../assets/sms (3).png"
import { Link } from 'react-router'
import Header from '../components/Header'

const DashBoard = () => {

  let userData = JSON.parse(localStorage.getItem("userLoggedIn"))


  return (
    <>
      <Header />
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
              <img id="sms1" src={smsone} alt="" />
              <img id="sms2" src={smstwo} alt="" />
              <img id="sms3" src={smsthree} alt="" />
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