import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";


const Bookings = () => {


  const {user}=useContext(AuthContext);
 const [bookings,setBookings] = useState([]);

  const url =`http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data=>console.log(data))
  },[]);
  return (
    <div>
      
    </div>
  );
};

export default Bookings;