import React from 'react';

const Photos = ({ img }) => {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={img}
        alt="photography"
        className="w-[300px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Photos;
