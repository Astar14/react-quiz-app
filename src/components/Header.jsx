import React from 'react'
import userImage from "../assets/user_image.jpg";
import techpaathshala from "../assets/techpaathshala.svg";
import { useNavigate } from 'react-router';

const Header = () => {

    let userData = JSON.parse(localStorage.getItem("userLoggedIn"))
    const navigate = useNavigate()

    const handleLogout = () => {
        if (confirm("Are you sure you want to logout")) {
            localStorage.clear()
            navigate("/")
        }
    }

    return (
        <>
            <header id="header">
                <div id="tech-logo">
                    <a href="startquiz.html">
                        <img
                            src={techpaathshala}
                            alt="techpaathsala"
                        />
                    </a>
                </div>

                <div className="right-side-info">
                    <ul>
                        <a href="startquiz.html">
                            <li></li>
                        </a>
                        <li>Welcome,</li>
                        <li>{userData?.fullName}</li>
                        <img
                            id="popup"
                            src={userImage}
                            alt="userimage"
                            onClick={handleLogout}
                        />
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header