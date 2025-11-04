import React from "react";

const Card = ({ song }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <img src={song.image} alt={song.title} className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{song.title}</h2>
        <p className="text-gray-500">{song.artist}</p>
        <button className="mt-3 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Card;
