import React from 'react'
import techpaathshala from "../assets/techpaathshala.svg"
import vector from "../assets/Vector 15.png"
import crown from "../assets/crown.png"
import mypic from "../assets/amit.jpeg"
import userImage from "../assets/user_image.jpg"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const LeaderBoard = () => {
  let userData = JSON.parse(localStorage.getItem("userLoggedIn"))
  const userTests = useSelector((state) => state.userTests.userTests);

  const dispatch = useDispatch()

  return (
      <>
       <header id="header">
      <div id="tech-logo">
        <a href="startquiz.html"><img src={techpaathshala} alt="techpaathsala" /></a>
      </div>

     
      <div className="right-side-info">
        <ul>
          <a href="startquiz.html"><li></li></a>
           <li>Welcome,</li>
            <li>{dispatch(userTests.totalScore)}</li>
           <img
          id="popup"
          src={userImage}
          alt="userimage"
        />
         </ul>
      </div>
    </header>

    <section id="leaderboard-main">
      <h1 id="user-rank-title">Wow You Rank 1st</h1>
        <p id="supporting-text">Your Score: {userData.fullName}</p>
    </section>

    <section id="score-board">
      <div id="first-rank-container">
        <div className="first-rank">
          <div className="crown">
            <img src={crown} alt="" />
          </div>
          <div className="bg-color"></div>
          <div className="actual-score">
            <h2>Score</h2>
            <p>0</p>
          </div>
          
          <div className="circle">
            <p className="username"></p>
             <img src={mypic} alt="" />
          </div>
        </div>
      </div>

      <div id="second-rank-container">
        <div className="second-rank">
          <div className="bg-color2"><p className="rank2">#2</p></div>
          <div className="actual-score2">
            <h2>Score</h2>
            <p>0</p>
          </div>
          <div className="circle">
            <img src={mypic} alt="" /> 
            <p className="username"></p>
          </div>
        </div>
      </div>

      <div id="third-rank-container">
        <div className="third-rank">
          <div className="bg-color3"><p className="rank2">#3</p></div>
          <div className="actual-score3">
            <h2>Score</h2>
            <p>00</p>
          </div>
          <div className="circle">
             <img src={mypic} alt="" /> 
            <p className="username"></p>
          </div>
        </div>
      </div>

      <div className="radius-design">
        <img src={vector} alt=""/>
        <div className="ranking-board">
          <div className="ranking">
            <p className="user-name"><span>#4</span> Name</p>
            <p className="user-name">0</p>
          </div>
          <div className="ranking">
            <p className="user-name"><span>#5</span> Name</p>
            <p className="user-name">0</p>
          </div>
          <div className="ranking">
            <p className="user-name"><span>#6</span> Name</p>
            <p className="user-name">0</p>
          </div>
        </div>
      </div>
    </section>

    <div id="logout-container">
      <p id="my-name">Hii, Amit</p>
      <p id="my-email">amit2546@gmail.com</p>
      <button id="logout-button" onclick="logout()">Logout</button>
    </div>
      </>
  )
}

export default LeaderBoard