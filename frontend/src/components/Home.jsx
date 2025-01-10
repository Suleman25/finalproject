import React, { useState } from "react";
import Header from './Header';
import ImageSection from './ImageSection';
import { useAuth } from '../context/AuthContext';
import { ROUTES } from '../config/routes';

function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { logout } = useAuth();
  
  const menu = (abc) => {
    setSelectedTopic(abc);
  };

  return (
    <section className="background-img">
      <header className="header-bar">
        <span className="logo">Portfolio</span>
        <div className="flex justify-between items-center">
          <nav>
            <ul className="nav-menu">
              <Header isSelected={selectedTopic === 'home'} select={() => menu('home')} to={ROUTES.HOME}>Home</Header>
              <Header isSelected={selectedTopic === 'about'} select={() => menu('about')} to='/about'>About</Header>
              <Header isSelected={selectedTopic === 'services'} select={() => menu('services')} to='/services'>Services</Header>
              <Header isSelected={selectedTopic === 'nature'} select={() => menu('nature')} to={ROUTES.NATURE}>Nature</Header>
              <Header isSelected={selectedTopic === 'portrait'} select={() => menu('portrait')} to={ROUTES.PORTRAIT}>Portrait</Header>
              <Header isSelected={selectedTopic === 'product'} select={() => menu('product')} to={ROUTES.PRODUCT}>Product</Header>
              <Header isSelected={selectedTopic === 'wedding'} select={() => menu('wedding')} to={ROUTES.WEDDING}>Wedding</Header>
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
      <div className="content">
        <ImageSection
          title="Muhammad Suleman"
          description="A Creative Freelancer & Full Stack Developer"
        />
      </div>
    </section>
  );
}

export default Home;