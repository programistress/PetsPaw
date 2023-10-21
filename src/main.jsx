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
import SearchElement from './routes/SearchElement';
import BreedsElement from './routes/BreedsElement';
import Likes from './routes/Likes';
import Dislikes from './routes/Dislikes';
import Favorites from './routes/Favorites';
import { Provider } from 'react-redux';
import { store } from './features/store';

const router = createBrowserRouter([
  {
    path :'/',
    element: <Home />,
    errorElement: <ErrorPage />,
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
    path: '/search',
    element: <SearchElement/>
  },
  {
    path: '/likes',
    element: <Likes />
  },
  {
    path: '/dislikes',
    element: <Dislikes />
  },
  {
    path: '/favorites',
    element: <Favorites />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
