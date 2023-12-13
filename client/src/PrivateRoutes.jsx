import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
export default function PrivateRoutes() {

    const user = localStorage.getItem("user")
    return (
        user ? <Outlet /> : <Navigate to="/" />
    )
}