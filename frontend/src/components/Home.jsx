import React, { useState } from "react";
import Header from './Header';
import ImageSection from './ImageSection';
import { useAuth } from '../context/AuthContext';

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
        <nav>
          <ul className="nav-menu">
            <Header isSelected={selectedTopic === 'home'} select={() => menu('home')} to="/home">Home</Header>
            <Header isSelected={selectedTopic === 'about'} select={() => menu('about')} to="/about">About</Header>
            <Header isSelected={selectedTopic === 'services'} select={() => menu('services')} to="/services">Services</Header>
            <Header isSelected={selectedTopic === 'portfolio'} select={() => menu('portfolio')} to="/portfolio">Portfolio</Header>
          </ul>
        </nav>
        <button
          onClick={logout}
          className="logout-btn"
        >
          Logout
        </button>
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