import React, { useState } from 'react'
import techpaathshala from "../assets/techpaathshala.svg"
import vector from "../assets/Vector 15.png"
import crown from "../assets/crown.png"
import mypic from "../assets/amit.jpeg"
import userImage from "../assets/user_image.jpg"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUserTestRequest } from '../store/userTest/userTestAction'

const LeaderBoard = () => {

  const userTests = useSelector((state) => state.userTests.userTests);
  const dispatch = useDispatch()

  const [sortedUsers, setSortedUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(null)
  const [currentUserMarks, setCurrentUserMarks] = useState(null)

  let userData = JSON.parse(localStorage.getItem("userLoggedIn"))
  console.log(userData.email)

  useEffect(() => {
    dispatch(fetchUserTestRequest());
  }, [dispatch]);

  useEffect(() => {
    const sortedData = userTests.sort((a, b) => b.totalScore - a.totalScore);
    setSortedUsers(sortedData);
    console.log(sortedData)
  }, [userTests]);


  useEffect(() => {
    if (userData && sortedUsers.length > 0) {
      const index = sortedUsers.findIndex(
        (user) => user.userInfo.fullName === userData.fullName
      ) + 1;
      const user = sortedUsers.find((user) => user.userInfo.email === userData.email);
      console.log(user)
      setUserIndex(index);
      setCurrentUserMarks(user.totalScore);
      
    }
  }, [sortedUsers,userData]);


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
            <li>{userData.fullName}</li>
            <img
              id="popup"
              src={userImage}
              alt="userimage"
            />
          </ul>
        </div>
      </header>

      <section id="leaderboard-main">
        <h1 id="user-rank-title">Wow You Rank {userIndex || 'N/A'}</h1>
        <p id="supporting-text">Your Score: {currentUserMarks || 0}</p>
      </section>

      <section id="score-board">
        {
          sortedUsers?.slice(0, 1).map((user) => (
            <div id="first-rank-container">
              <div className="first-rank">
                <div className="crown">
                  <img src={crown} alt="" />
                </div>
                <div className="bg-color"></div>
                <div className="actual-score">
                  <h2>Score</h2>
                  <p>{user.totalScore}</p>
                </div>

                <div className="circle">
                  <p className="username">{user.userInfo.fullName}</p>
                  {/* <img src={mypic} alt="" /> */}
                </div>
              </div>
            </div>
          ))
        }

        {
          sortedUsers?.slice(1, 2).map((user) => (
            <div id="second-rank-container">
              <div className="second-rank">
                <div className="bg-color2"><p className="rank2">#2</p></div>
                <div className="actual-score2">
                  <h2>Score</h2>
                  <p>{user.totalScore}</p>
                </div>
                <div className="circle">
                  {/* <img src={mypic} alt="" /> */}
                  <p className="username">{user.userInfo.fullName}</p>
                </div>
              </div>
            </div>
          ))
        }

        {
          sortedUsers.slice(2, 3).map((user) => (
            <div id="third-rank-container">
            <div className="third-rank">
              <div className="bg-color3"><p className="rank2">#3</p></div>
              <div className="actual-score3">
                <h2>Score</h2>
                  <p>{user.totalScore}</p>
              </div>
              <div className="circle">
                {/* <img src={mypic} alt="" /> */}
                  <p className="username">{user.userInfo.fullName}</p>
              </div>
            </div>
          </div>
          ))
      }
      

        <div className="radius-design">
          <img src={vector} alt="" />
          <div className="ranking-board">
            {
              sortedUsers.slice(3, 6).map((user,index) => (
                <div className="ranking">
                  <p className="user-name"><span>#{index +4 }</span> {user.userInfo.fullName}</p>
                  <p className="user-name">{user.totalScore}</p>
            </div>
              ))
            }
            {/* <div className="ranking">
              <p className="user-name"><span>#5</span> Name</p>
              <p className="user-name">0</p>
            </div>
            <div className="ranking">
              <p className="user-name"><span>#6</span> Name</p>
              <p className="user-name">0</p>
            </div> */}
          </div>
        </div>

      </section>

      {/* <section id="score-board">
        {
          sortedUsers.slice(0, 6).map((user, index) => (

            <div key={user.email}>
             {/* {index === 0 && ( 
                <div id="first-rank-container">
                  <div className="first-rank">
                    <div className="crown">
                      <img src={crown} alt="" />
                    </div>
                    <div className="bg-color"></div>
                    <div className="actual-score">
                      <h2>Score</h2>
                      <p>{user.totalScore}</p>
                    </div>
                    <div className="circle">
                      <p className="username">{user.userInfo.fullName}</p>
                      <img src={mypic} alt="" />
                    </div>
                  </div>
                </div>
              {/* //)} */}
      {/* {index === 1 && ( 
                <div id="second-rank-container">
                  <div className="second-rank">
                    <div className="bg-color2"><p className="rank2">#2</p></div>
                    <div className="actual-score2">
                      <h2>Score</h2>
                      <p>{user.totalScore}</p>
                    </div>
                    <div className="circle">
                      <img src={mypic} alt="" />
                      <p className="username">{user.userInfo.fullName}</p>
                    </div>
                  </div>
                </div>
              {/* )} */}
      {/* {index === 2 && ( 
                <div id="third-rank-container">
                  <div className="third-rank">
                    <div className="bg-color3"><p className="rank2">#3</p></div>
                    <div className="actual-score3">
                      <h2>Score</h2>
                      <p>{user.totalScore}</p>
                    </div>
                    <div className="circle">
                      <img src={mypic} alt="" />
                      <p className="username">{user.userInfo.fullName}</p>
                    </div>
                  </div>
                </div>
               {/* )} */}
      {/* {index > 2 && ( 
                <div className="radius-design">
                  <img src={vector} alt="" />
                  <div className="ranking-board">
                    <div className="ranking">
                      <p className="user-name"><span>#{index + 1}</span> {user.userInfo.fullName || "NA"}</p>
                      <p className="user-name">{user.totalScore}</p>
                    </div>
                    <div className="ranking">
                      <p className="user-name"><span>#5</span> {user.userInfo.fullName || "NA"}</p>
                      <p className="user-name">{user.totalScore}</p>
                    </div>
                    <div className="ranking">
                      <p className="user-name"><span>#6</span> {user.userInfo.fullName || "NA"}</p>
                      <p className="user-name">{user.totalScore}</p>
                    </div>
                  </div>
                </div>
               {/* )} 
            </div>

          ))}
      </section> */}




      <div id="logout-container">
        <p id="my-name">Hii, Amit</p>
        <p id="my-email">amit2546@gmail.com</p>
        <button id="logout-button" onclick="logout()">Logout</button>
      </div>
    </>
  )
}

export default LeaderBoard