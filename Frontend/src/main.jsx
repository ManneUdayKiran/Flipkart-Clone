import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products.jsx";
import Login from "./components/Login.jsx";
import App from "./App.jsx";
import 'antd/dist/reset.css'; // ✅ required in your main entry (like main.jsx)
import { WishListProvider } from './context/WIshListContext';


// import Login from './components/Login.jsx'/
// import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
 
    <StrictMode>
      
      <CartProvider>
         <WishListProvider>
      <App />
    </WishListProvider>
      </CartProvider>
  
  </StrictMode>
  
);
