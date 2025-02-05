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
import Email from './components/Email/Email';
import SignIn from './components/Signin/SignIn';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/email',
        element: <Email></Email>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider></HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
