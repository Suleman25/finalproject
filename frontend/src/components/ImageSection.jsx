import React from "react";

const ImageSection = ({ title, description }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default ImageSection;