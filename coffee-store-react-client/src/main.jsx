import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffee')
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
  },
  {
    path:"/coffee-details/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="w-[1320px] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
