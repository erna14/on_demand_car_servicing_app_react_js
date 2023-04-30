import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { useLayoutEffect } from 'react'
import './App.css';
import Header from "./components/Layout/Header";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import HomePage from "./components/auth/HomePage";
import ViewBookings from "./components/auth/ViewBookings";
import ViewVehicles from "./components/auth/ViewVehicles";
import ManageServices from "./components/auth/ManageServices";
import MyProfile from "./components/auth/MyProfile";
import History from "./components/auth/History";
import Settings from "./components/auth/Settings";
import Notifications from "./components/auth/Notifications";

function App() {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = '#A7D6F4';
    });

    let currentPage = window.location.pathname;
    let pageName = null;

    if (currentPage === '/login') {
        pageName = "LOGIN";
    } else if (currentPage === '/signUp') {
        pageName = "SIGN UP"
    } else if (currentPage === '/homePage') {
        pageName = "HOME PAGE"
    } else if (currentPage === '/viewBookings') {
        pageName = "VIEW BOOKINGS"
    } else if (currentPage === '/viewVehicles') {
        pageName = "VIEW VEHICLES"
    } else if (currentPage === '/manageServices') {
        pageName = "MANAGE SERVICES"
    } else if (currentPage === '/myProfile') {
        pageName = "MY PROFILE"
    } else if (currentPage === '/history') {
        pageName = "HISTORY"
    } else if (currentPage === '/settings') {
        pageName = "SETTINGS"
    } else if (currentPage === '/notifications') {
        pageName = "NOTIFICATIONS"
    }

    return (
        <BrowserRouter>
            <Header
                page_name = {pageName}
            />
            <Routes>
                <Route index={true} path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/homePage" element={<HomePage/>}/>
                <Route path="/viewBookings" element={<ViewBookings/>}/>
                <Route path="/viewVehicles" element={<ViewVehicles/>}/>
                <Route path="/manageServices" element={<ManageServices/>}/>
                <Route path="/myProfile" element={<MyProfile/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path={'*'} element={<Navigate to={'/login'}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
