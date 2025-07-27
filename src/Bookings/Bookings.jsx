import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "../components/BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user, logOut } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    if (user?.email) {
      fetch(url, {
        credentials: 'include', 
      })
        .then(res => res.json())
        .then(data => {
          console.log("Raw data:", data);

          if (data.message === "Invalid Token") {
            console.error("Invalid token detected. Logging out...");
            logOut().then(() => {
              navigate("/login");
            });
          } else if (Array.isArray(data)) {
            setBookings(data);
          } else {
            setBookings([]);
          }
        })
        .catch(err => console.error("Error fetching bookings:", err));
    }
  }, [user?.email, url, logOut, navigate]);

  const handleDelete = id => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ status: 'confirmed' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = "confirmed";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Your Bookings: {bookings.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Select</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <BookingRow
                key={index}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
