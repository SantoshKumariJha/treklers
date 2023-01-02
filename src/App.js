import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import LoginScreen from "./loginScreen/LoginScreen";
import HomeContent from "./components/homeContainer/HomeContent";
import Payment from "./components/Payment";
import JobListing from "./components/JobListing";
import DriverList from "./components/DriverList";
import DriverDetails from "./components/DriverDetails";
import EmployerDetails from "./components/EmployerDetails";

// window.Popper = require("popper.js").default;
const App = () => (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContent/>} />
                <Route path="/loginscreen" element={<LoginScreen/>} />
                <Route path="/homecontent" element={<HomeContent/>} />
                <Route path="/payment" element={<Payment/>} />
                <Route path="/driverlist" element={<DriverList/>} />
                <Route path="/joblisting" element={<JobListing/>} />
                <Route path="/driverdetails" element={<DriverDetails/>}/>
                <Route path="/employerdetails" element={<EmployerDetails/>}/>
            </Routes>
    </BrowserRouter>
);

export default App;
