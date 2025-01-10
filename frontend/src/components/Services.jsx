import React from 'react';
import Header from './Header';
import { useAuth } from '../context/AuthContext';
import { ROUTES } from '../config/routes';

const Services = () => {
  const { logout } = useAuth();

  return (
    <section>
      <header className="header-bar">
        <span className="logo">Portfolio</span>
        <div className="flex justify-between items-center">
          <nav>
            <ul className="nav-menu">
              <Header to={ROUTES.HOME}>Home</Header>
              <Header to="/about">About</Header>
              <Header to="/services">Services</Header>
              <Header to={ROUTES.NATURE}>Nature</Header>
              <Header to={ROUTES.PORTRAIT}>Portrait</Header>
              <Header to={ROUTES.PRODUCT}>Product</Header>
              <Header to={ROUTES.WEDDING}>Wedding</Header>
            </ul>
          </nav>
          <button
            onClick={logout}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>
      
      <div className='service-page'>
        <div className='text'> 
          <p><i><b>What I Do</b></i></p>
          <h1>My Services</h1>
        </div>
        <div className='service-box'>
          <div>
            <h3>Creative design</h3>
            <p>Creative design is all about blending innovation and aesthetics to craft unique, impactful experiences. It focuses on using bold visuals, dynamic layouts, and interactive elements to communicate ideas effectively. By breaking conventional norms and embracing originality, creative design transforms concepts into visually compelling stories that leave a lasting impression</p>
          </div>
          <div>
            <h3>User Interface</h3>
            <p>User interface design is the art of crafting intuitive and visually appealing interactions between users and digital products. It focuses on creating seamless navigation, clear layouts, and engaging visuals to enhance user experiences. By prioritizing simplicity and functionality, great UI design ensures that users can effortlessly connect with technology in meaningful ways</p>
          </div>
          <div>
            <h3>Social Media Handler</h3>
            <p>Social media handling is about strategically managing online platforms to build a strong and engaging digital presence. It involves creating compelling content, fostering audience interaction, and maintaining a consistent brand voice. By leveraging creativity and analytics, a skilled social media handler drives growth, builds connections, and amplifies brand visibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;