import React from 'react'
import Sidebar from '../components/Sidebar'
import './admin.css'

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
        <Sidebar/>

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