import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { fetchUserTestRequest } from '../store/userTest/userTestAction'
import Sidebar from '../components/Sidebar'

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
                <Sidebar/>

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