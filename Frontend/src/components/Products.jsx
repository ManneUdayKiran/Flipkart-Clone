import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Items from './Items';


const Products = () => {
   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';




  return (
    <div style={{backgroundColor:'whitesmoke'}} className="container-fluid mt-0">
      <div>

        <Items searchTerm={searchQuery} />
        </div>  
      

    </div>
  );
};

export default Products;
