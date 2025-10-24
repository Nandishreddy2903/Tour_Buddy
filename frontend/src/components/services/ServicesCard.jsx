// ServicesCard.jsx
import React from 'react';

const ServicesCard = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
    </div>
  );
};

export default ServicesCard;



