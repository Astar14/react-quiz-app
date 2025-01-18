import React from 'react'
import "./admin.css"

const AdminDashboard = () => {
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
        <ul clas="menu">
          <li>
            <i class="fa-solid fa-house"></i>
           <a class="dashboard" href="adminDashboard.html">Home</a> 
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
            <a class="usersss" href="users.html">Users</a>
          </li>
          <li>
            <i class="fa-solid fa-question"></i>
            <a class="quizzes" href="quizzes.html">Quizzes</a>
          </li>
        </ul>
        <div class="admin-logout-btn">
          <i class="fa-solid fa-arrow-left-from-bracket"></i>
          <button onclick="logout()">Logout</button>
        </div>
      </section>

      <section class="main-content">
        <div class="main-content-info">
          <h1>Welcome to the Admin Page</h1>
        </div>
      </section>
    </div>
      </>
  )
}

export default AdminDashboard