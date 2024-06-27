import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin-dashboard">Dashboard Count</Link></li>
        <li><Link to="/userlist">User List</Link></li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
