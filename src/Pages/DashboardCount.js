import React, { useState, useEffect } from 'react';

const DashboardCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    setUserCount(users.length);
  }, []);

  return (
    <div>
      <h2>User Count: {userCount}</h2>
    </div>
  );
};

export default DashboardCount;
