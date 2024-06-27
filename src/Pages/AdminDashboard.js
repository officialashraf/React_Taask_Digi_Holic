import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '../Components/DashboardSidebar';
import UserList from '../Components/UserList';
import DashboardCount from '../Pages/DashboardCount';
//import '../Style/AdminDasboard.css'; // Import the CSS file for styling

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <DashboardSidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </header>
        <DashboardCount />
        <UserList />
      </div>
    </div>
  );
};

export default AdminDashboard;
