import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { fetchUserTestRequest } from '../store/userTest/userTestAction'

const TestDetails = () => {

    const userTest = useSelector((state) => state.userTests.userTests)
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(userTest[0])

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])

    const selectedUser = userTest[id];

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
                            onclick="popUp()"
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
                        <a href="adminDashboard.html"> <li><i class="fa-solid fa-house"></i>Home</li></a>
                        <a href="users.html">  <li><i class="fa-solid fa-user"></i>Users</li></a>
                        <a href="quizzes.html"><li><i class="fa-solid fa-question"></i>Quizzes</li></a>
                    </ul>
                    <div class="admin-logout-btn">
                        <i class="fa-solid fa-arrow-left-from-bracket"></i>
                        <button onclick="logout()">Logout</button>
                    </div>
                </section>

                <section class="main-content">
                    <div class="users-test-attempt">
                        <h1>User Test Attempts</h1>
                        <p id="user-name">Amit </p>
                        <p id="user-email">amit@gmail.com</p>
                        <table class="table-three" >
                            <thead>
                                <tr>
                                    <th>Test Attempt</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                    <th>Time Spent(minute)</th>
                                    <th>View Test Details</th>
                                </tr>
                            </thead>

                            <tbody>

                                {selectedUser?.tests?.map((user, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.totalScore}</td>
                                        <td>2024-10-15</td>
                                        <td>{user.timeTaken}</td>
                                        <td>{<Link to={`/fulltestdetails/${id}/${index}`}>View More</Link>}</td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
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

export default TestDetails