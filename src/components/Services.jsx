import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch('https://fixolyserver.vercel.app/Services')
      .then(res => res.json())
      .then(data => setService(data));
  }, []); 

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 mb-2 ">
      <div className="text-center mb-3">
        <div className="font-extrabold text-xl text-orange-600">Services</div>
        <h3 className="text-3xl text-orange-600 font-semibold mt-2">Our Services Area</h3>
        <p className="mt-2 text-gray-600">
          🔧 Same-day service | 💯 Quality parts | 🏠 Doorstep repair available
        </p>
      </div>

      <div className="grid gap-4 space-x-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          service.map(services => <ServiceCard key={services._id} services={services} />)

        }
      </div>
    </div>
  );
};

export default Services;
