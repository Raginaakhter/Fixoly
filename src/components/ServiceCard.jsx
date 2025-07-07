import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ services = {} }) => {
  const { _id, title, image, price, description } = services;
  console.log("ID:", _id);

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
          <Link to={`/checkout/${_id}`}>
            <button className='btn bg-blue-600 text-amber-50'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
