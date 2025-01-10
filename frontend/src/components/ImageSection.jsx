import React from "react";
import meImage from '../assets/me.jpg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const ImageSection = ({ title, description }) => {
  return (
    <div className="hero-section">
      <div className="profile-images">
        <img src={img2} alt="Background 1" className="floating-image img2" />
        <img src={meImage} alt="Profile" className="profile-image" />
        <img src={img3} alt="Background 2" className="floating-image img3" />
      </div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageSection;