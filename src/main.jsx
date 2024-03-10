import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './lib/react-query/QueryProvider.jsx'
import AuthProvider from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <QueryProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
  </React.StrictMode>
)
