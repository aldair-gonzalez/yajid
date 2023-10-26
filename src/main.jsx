import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Intro from './components/intro/Index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Intro />
      }
    ]
  }  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
