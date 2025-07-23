import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "../components/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    if (user?.email) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("Bookings fetched:", data);
          setBookings(data);
        })
        .catch(err => console.error("Error fetching bookings:", err));
    }
  }, [user, url]);

  const handleDelete = id => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
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
      body: JSON.stringify({ status: 'confirmed' })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Confirm response:", data);
        if (data.modifiedCount > 0) {
          // update status

const remaining = bookings.filter(booking=>booking._id !==id);
const updated = bookings.find(booking =>booking._id ===id);
updated.status = "confirmed"; 

const newBookings = [updated , ...remaining];
setBookings(newBookings);

          // const updated = bookings.map(booking =>
          //   booking._id === id ? { ...booking, status: 'confirmed' } : booking
          // );
          // setBookings(updated);
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
