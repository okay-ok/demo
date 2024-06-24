import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import About from './About'
import Abt from './Abt'
import Navigation from './navbar.js'
const router =createBrowserRouter([
    {
        path: '/',
        element: <App />,
//addintg the navbar
    },

    {
        path: '/about/:number',
        element: <Abt />,
    },
    {
        path: '/abt',
        element:<About/>,
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navigation/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
