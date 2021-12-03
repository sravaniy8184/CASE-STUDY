import React from 'react';
import {Route, Link, BrowserRouter as Router,Routes} from 'react-router-dom'
import App from './App'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


const dashboard=(
    <Router>
        <div align="left">
            <ul>
                <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/SignUp" element={<SignUp/>}></Route>
                <Route path="/DoctorDetails"  element={<SignUp/>}></Route>
                </Routes>
                
            </ul>
        </div>
    </Router>
)

