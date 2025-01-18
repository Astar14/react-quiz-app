import React from 'react'

const TestDetails = () => {
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
                <tr>
                  <td>1</td>
                  <td>100</td>
                  <td>2024-10-15</td>
                  <td>1.22</td>
                  <td><a href="testDetails.html">View more</a></td>
              </tr>
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