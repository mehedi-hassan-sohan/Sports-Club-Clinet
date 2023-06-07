import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from '../Routers/Router.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from '../Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>

  </React.StrictMode>,
)
