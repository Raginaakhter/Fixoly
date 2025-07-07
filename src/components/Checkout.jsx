import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { id } = useParams(); 
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/Services/${id}`)
      .then(res => res.json())
      .then(data => {
        setService(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching service:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading service...</p>;
  if (!service || !service.title) return <p className="text-center mt-10 text-red-500">No service found!</p>;

  return (
    <div className="p-6 bg-white shadow rounded max-w-xl mx-auto mt-10">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
      <p className="text-gray-700 my-2">{service.description}</p>
      <p className="text-lg font-semibold">Price: ৳{service.price}</p>

  
      <Link to={`/book/${id}`} className="btn bg-blue-600 text-white mt-4">Book Now</Link>
    </div>
  );
};

export default Checkout;
