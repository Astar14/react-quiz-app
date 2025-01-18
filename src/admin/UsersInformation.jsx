import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserTestRequest } from '../store/userTest/userTestAction'
import { Link } from 'react-router'
//import "./admin.css"


const UsersInformation = () => {

    const userTest = useSelector((state) => state.userTests.userTests)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])

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
                        <a href="adminDashboard.html">  <li><i class="fa-solid fa-house"></i>Home</li></a>
                        <li>
                            <i class="fa-solid fa-user"></i>
                            <a class="usersss">Users</a>
                        </li>
                        <a href="quizzes.html"><li><i class="fa-solid fa-question"></i>Quizzes</li></a>
                    </ul>
                    <div class="admin-logout-btn">
                        <i class="fa-solid fa-arrow-left-from-bracket"></i>
                        <button >Logout</button>
                    </div>
                </section>

                <section class="main-content">
                    <div class="users-information">
                        <table class="table-two" >
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Score</th>
                                    <th>Test Count</th>
                                    <th>View more</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    userTest.map((user, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.totalScore}</td>
                                            <td>{user.tests.length}</td>
                                            <td>{<Link to={`/testdetails/${index}`}>View More</Link>}</td>
                                        </tr>
                                    ))
                                }
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

export default UsersInformation