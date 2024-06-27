
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Home.css'; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const adminpage =() =>{
    navigate('/admin-dashboard')
  }

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Digi Holic</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h2>Discover Amazing Products</h2>
          <p>Make the latest products from top brands Software.</p>
      <p> Click Here the button if you want go to  the Admin Dashboard</p>
          <button  onClick={adminpage}  className="shop-now-button"> Admin Dashboard</button>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
