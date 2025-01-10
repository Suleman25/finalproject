import React from "react";
import meImage from '../assets/me.jpg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const ImageSection = ({ title, description }) => {
  return (
    <div className="hero-section">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img src={img2} alt="Portfolio Work 1" className="side-image" />
        </div>
        <div className="profile-image-wrapper">
          <img src={meImage} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-image-wrapper">
          <img src={img3} alt="Portfolio Work 2" className="side-image" />
        </div>
      </div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageSection;