import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) {
      setWishList(JSON.parse(stored));
    }
  }, []);

  const addToWishList = (item) => {
    const alreadyInWishList = wishList.some(wishItem => wishItem.id === item.id);
    if (alreadyInWishList) {
      toast.info(`Already added in your wishlist.`);
    } else {
      const updated = [...wishList, item];
      setWishList(updated);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      toast.success(`Added to wishlist.`);
    }
  };

  const removeFromWishList = (id) => {
    const updated = wishList.filter(wishItem => wishItem.id !== id);
    setWishList(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    toast.success(`Item removed from wishlist.`);
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
