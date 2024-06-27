import React from 'react';
import './Style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import UserList from './Components/UserList'
import AdminDashboard from './Pages/AdminDashboard';

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/userlist" element={<UserList/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
