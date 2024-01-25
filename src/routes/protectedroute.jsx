import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../services/authProvider";
import { getIsLoggedIn } from "../services/auth";
export default function ProtectedRoute() {

    const isAuthenticated= getIsLoggedIn();

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />

}