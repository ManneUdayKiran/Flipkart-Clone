import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className='col-md-2 text-md-center'>
      <img height={140} width={140} src={image} alt={title} className='img-fluid trend' />
      <p>
        {title}
        <p className='fw-bolder'>Under ${price}</p>
      </p>
    </div>
  );
};

export default ProductCard;
