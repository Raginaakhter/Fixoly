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
