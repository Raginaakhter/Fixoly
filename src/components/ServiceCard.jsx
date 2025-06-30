import React from 'react';

const ServiceCard = ({ services = {} }) => {
  const { title, image, price, description } = services;

  return (
    <div className="card bg-base-100 w-72 shadow-md border">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-30 w-full object-cover"
        />
      </figure>
      <div className="card-body space-x-3">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-cyan-700 font-semibold">৳ {price}</span>
          <button className="btn btn-primary btn-sm">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
