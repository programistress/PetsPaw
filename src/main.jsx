import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import ErrorPage from './routes/ErrorPage';
import VotingElement from './routes/VotingElement';
import GalleryElement from './routes/GalleryElement';
import BreedsElement from './routes/BreedsElement';

const router = createBrowserRouter([
  {
    path :'/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
  
    ]
  },
  {
    path: '/voting',
    element: <VotingElement />
  },
  {
    path: '/breeds',
    element: <BreedsElement />
  },
  {
    path: '/gallery',
    element: <GalleryElement/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
