import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components//Login';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';
import Products from './components/Products';
import NavItems from './components/NavItems';
import Hero from './components/Hero';
import Trending_Products from './components/Trending_Products';
import Categorys from './components/Categorys';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/products" element={<Products />} />

        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              {/* <NavItems />
              <Hero />
              <Trending_Products /> */}
              <Categorys/>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
