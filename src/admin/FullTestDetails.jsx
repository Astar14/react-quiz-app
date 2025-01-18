import React from 'react'

const FullTestDetails = () => {
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
                            <p class="users-name">skvbk</p>
                            <p class="users-email">jvbesrbvvfvd</p>
                        </div>
                        <ul class="top-information">
                            <li class="score"><strong>Score:</strong>50</li>
                            <li class="timestamp"><strong>Date:</strong>2024-10-15</li>
                            <li class="time-spent"><strong>Time Spent:</strong>1.22</li>
                        </ul>
                        <div class="container">
                            <div class="questions-container">
                                <p class="question">What is html stands for ??</p>
                                <ul>
                                    <li>hyperttext</li>
                                    <li>hype</li>
                                    <li>hypert</li>
                                    <li>aadfsdf</li>
                                </ul>
                                <p class="your-answer">Your Answer:a</p>
                                <p class="correct-answer">Correct Answer: d</p>
                            </div>
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