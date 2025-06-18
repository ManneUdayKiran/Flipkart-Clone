import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products.jsx'
import Login from './components/Login.jsx'
import App from './App.jsx'
// import Login from './components/Login.jsx'/
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
    
   
  </StrictMode>,
)
