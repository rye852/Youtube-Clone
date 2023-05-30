// my Fiels
import App from './App.js';
import './main.css';
import { Feed, VideoDetails, ChannelDetails, SearchFeed } from './components';
// Others
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: 'video/:id',
        element: <VideoDetails />,
      },
      {
        path: 'channel/:channelId',
        element: <ChannelDetails />,
      },
      {
        path: 'search/:searchTerm',
        element: <SearchFeed />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
