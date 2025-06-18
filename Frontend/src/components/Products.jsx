import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Items from './Items';


const Products = () => {
   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';




  return (
    <div className="container mt-4">
      <h3>Results for: {searchQuery}</h3> 
      <div>
        <Items searchTerm={searchQuery} />
        </div>  
      

    </div>
  );
};

export default Products;
