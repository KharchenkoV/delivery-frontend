import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequiredAuth = ({ allowedRole }) => {
    const auth = JSON.parse(localStorage.getItem('user'))
    const location = useLocation()
    return (
        auth?.role === allowedRole
        ? <Outlet/>
        : <Navigate to='/login' state={{from: location}} replace />
    )
}

export default RequiredAuth