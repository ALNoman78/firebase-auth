import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { HelmetProvider } from 'react-helmet-async';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider></HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
