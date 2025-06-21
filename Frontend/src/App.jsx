import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components//Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import Products from "./components/Products";
import NavItems from "./components/NavItems";
import Hero from "./components/Hero";
import Trending_Products from "./components/Trending_Products";
import Categorys from "./components/Categorys";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import ProductView from "./components/ProductView";
import { CartProvider } from "./context/CartContext";
import WishList from "./components/WishList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer  position="top-center" autoClose={2000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/viewcart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/wishlist" element={<WishList/>} />

        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <NavItems />
              <Hero />
              <Trending_Products />
              {/* <Categorys/> */}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
