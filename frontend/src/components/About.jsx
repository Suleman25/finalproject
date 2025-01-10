import React from 'react';
import Header from './Header';
import { useAuth } from '../context/AuthContext';
import { ROUTES } from '../config/routes';

const About = () => {
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
      <div className="about-page">
        <div>
          <h1>About Me</h1>
          <p>My name is Muhammad Suleman. I'm full stack developer based in Lahore, Pakistan, and I am very passionate and dedicated to my work. With 3 years of experience as a professional full stack developer, I have acquired the skills necessary to build great and premium websites</p>
        </div>
      </div>
    </section>
  );
};

export default About;
