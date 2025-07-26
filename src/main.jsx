import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './components/Home';
import Login from './Login';
import SignUp from './Root/SignUp';
import AuthProvider from './provider/AuthProvider';
import Users from './components/Users';
import Checkout from './components/Checkout';
import Bookservice from './components/Bookservice';
import Bookings from './Bookings/Bookings';
import Privateroute from './Routes/Privateroute';
import PrivateRoute from './Routes/Privateroute';

// import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
       {
        path: "/login",
        element:<Login></Login>

      },
       {
        path: "/signup",
        element:<SignUp></SignUp>

      },
      {
        path: "/users",
        element:<Users></Users>,
         loader: ()=>fetch('http://localhost:5000/users'),

      },
       {
        path: "/checkout/:id",
        element:<Checkout></Checkout>

      },
       {
        path: "/book/:id",
        element:<Privateroute><Bookservice></Bookservice></Privateroute>,
        loader:({params})=>fetch(`http://localhost:5000/Services/${params.id}`)

      },
       {
        path: "/bookings",
        element:<Privateroute><Bookings></Bookings></Privateroute>,
     

      },
       
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
     <RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
