import React from 'react'

// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Rating = () => {
  const location = useLocation();
  const isProduct = location.pathname.startsWith('/product/');
  return (
    <div>
        <div  className='d-flex align-items-center gap-1'>
            <span style={{border:'1px solid green',backgroundColor:'green',color:'white',fontSize:isProduct?'3.7mm':'3.1mm'}} className='px-1 rounded-1'>4.5<span style={{padding:'1px'}} >★</span>
</span>
            <span className='text-secondary'>(1000)</span>
             {isProduct && ( <span style={{color:'#848b95bd'}} className=' fw-bold' >18,345 Ratings & 764 Reviews </span>)} 
        </div>
        
    </div>
  )
}

export default Rating;