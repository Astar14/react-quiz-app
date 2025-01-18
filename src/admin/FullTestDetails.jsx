import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchUserTestRequest } from '../store/userTest/userTestAction'

const FullTestDetails = () => {

    const userTest = useSelector((state) => state.userTests.userTests)
    const dispatch = useDispatch()
    const { id, testIndex } = useParams()
    console.log(userTest[id]?.tests[testIndex])

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])

    // const selectedUser = userTest[id];

    const selectedUserTest = userTest[id]?.tests[testIndex];
    console.log(selectedUserTest)

    return (
        <>
            <header id="admin-header">
                <div id="tech-logo">
                    <i class="hamburger fa-solid fa-bars" onclick="sidebarToggle()"></i>
                    <img src="assets/techpaathshala.svg" alt="techpaathsala" />
                </div>

                <div class="right-side-info">
                    <ul>
                        <li>Welcome,</li>
                        <li>Admin</li>
                        <img
                            id="popup"
                            onclick="popUpLogout()"
                            src="assets/user_image.jpg"
                            alt="userimage"
                        />
                    </ul>
                </div>
            </header>

            <div class="admin-main-ciontainer">
                <section class="sidebar">
                    <h2>Dashboard</h2>
                    <ul>
                        <a href="adminDashboard.html">
                            <li><i class="fa-solid fa-house"></i>Home</li></a>
                        <a href="users.html">
                            <li><i class="fa-solid fa-user"></i>Users</li></a>
                        <a href="quizzes.html"
                        ><li><i class="fa-solid fa-question"></i>Quizzes</li></a>
                    </ul>
                    <div class="admin-logout-btn">
                        <i class="fa-solid fa-arrow-left-from-bracket"></i>
                        <button onclick="logout()">Logout</button>
                    </div>
                </section>

                <section class="main-content">
                    <div class="test-attempt-details">
                        <h1>Test Attempts Details</h1>
                        <div class="username-email">
                            <p class="users-name">{userTest[id]?.fullName}</p>
                            <p class="users-email">{userTest[id]?.email}</p>
                        </div>
                        <ul class="top-information">
                            <li class="score"><strong>Score:</strong>{selectedUserTest?.totalScore}</li>
                            <li class="timestamp"><strong>Date:</strong>2024-10-15</li>
                            <li class="time-spent"><strong>Time Spent:</strong>{selectedUserTest?.timeTaken}</li>
                        </ul>
                        <div class="container">
                            {console.log(userTest)}
                            {
                                selectedUserTest?.randomQuestions?.map((question,index) => (
                                    <div class="questions-container">
                                        <p class="question">{question.question}</p>
                                        <ul>
                                            <li>{question.answers[0]}</li>
                                            <li>{question.answers[1]}</li>
                                            <li>{question.answers[2]}</li>
                                            <li>{question.answers[3]}</li>
                                        </ul>

                                        <p class="your-answer">Your Answer:{question.answers[selectedUserTest.selectedOption[index]]}</p>
                                        <p class="correct-answer">Correct Answer:{question.answers[question.correct]}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
            </div>

            <div id="logout-container">
                <p id="my-name">Hii, Admin</p>
                <p id="my-email">admin007@gmail.com</p>
                <button id="logout-button" onclick="logout()">Logout</button>
            </div>
        </>
    )
}

export default FullTestDetails