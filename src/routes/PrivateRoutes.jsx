import React from 'react'
import { Navigate,Outlet } from 'react-router'


const useAuth = () => {
    const user = localStorage.getItem("userLoggedIn")
    if (user) {
        return true
    } else {
        return false
    }
}

const PrivateRoutes = () => {
    const auth = useAuth()
    return auth ?  <Outlet /> : <Navigate to={"/"}></Navigate>
}

export default PrivateRoutes