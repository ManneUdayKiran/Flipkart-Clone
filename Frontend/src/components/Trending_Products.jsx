// import React from 'react'
// import '../App.css'; // Assuming you have some styles in App.css

// const Trending_Products = (props) => {
//   return (
//     <>
//       <h2 className='text-center m-4'>Trending Products</h2>
//     <div className='container d-flex  flex-wrap flex-column flex-fill h-75 ' style={{ marginTop: '15px', marginBottom: '20px' }}>
//       <div className='row'>
//         <div className='col-md-2 text-md-center fw-bolder'>
//           <img height={120} width={120} src="saree.jpg" alt="Trending Product 1" className='img-fluid trend' />
//           <p> Sarees <p className=' fw-bolder '>Under $500</p></p>
//         </div>
//         <div className='col-md-2 text-md-center'>
//           <img height={120} width={120} src="trending2.webp" alt="Trending Product 2" className='img-fluid trend' />
//           <p> Western dress <p className=' fw-bolder  '>Under $500</p></p>
//         </div>
//         <div className='col-md-2 text-md-center'>
//           <img height={162} width={162} src="shoes.jpg" alt="Trending Product 3" className='img-fluid trend' />
//           <p> Shoes <p className=' fw-bolder  '>Under $500</p></p>
//         </div>
//         <div className='col-md-2 text-md-center'>
//           <img height={140} width={140} src="heels.jpg" alt="Trending Product 3" className='img-fluid trend' />
//           <p> Womens Heels <p className=' fw-bolder  '>Under $500</p></p>
//         </div>
//         <div className='col-md-2 text-md-center'>
//           <img height={136} width={136} src="shirt.png" alt="Trending Product 4" className='img-fluid trend' />
//           <p > Mens Shirts <p className=' fw-bolder  '>Under $500</p></p>
//         </div>
//         <div className='col-md-2 text-center'>
//           <img height={180} width={180} src="NIKE.webp" alt="Trending Product 4" className='img-fluid trend' />
//           <p> Tops Brands <p className=' fw-bolder  '>Under $500</p>
// </p>
//         </div>
//       </div>
        

//     </div>
//     </>
//   )
// }

// export default Trending_Products

import React from 'react';
import ProductCard from './ProductCard';
import '../App.css';

const Trending_Products = () => {
  return (
    <>
      <h2 className='text-center m-4'>Trending Products</h2>
      <div className='container d-flex flex-wrap flex-column flex-fill h-75' style={{ marginTop: '15px', marginBottom: '20px' }}>
        <div className='row'>
          <ProductCard image="saree.jpg" title="Sarees" price={500} />
          <ProductCard image="trending2.webp" title="Western Dress" price={500} />
          <ProductCard image="shoes.jpg" title="Shoes" price={500} />
          <ProductCard image="heels.jpg" title="Womens Heels" price={500} />
          <ProductCard image="shirt.png" title="Mens Shirts" price={500} />
          <ProductCard image="NIKE.webp" title="Top Brands" price={500} />
        </div>
      </div>
      <br /><hr />
            <h2 className='text-center m-4'>Beauty And More</h2>

      <div className='container d-flex flex-wrap flex-column flex-fill h-75' style={{ marginTop: '15px', marginBottom: '20px' }}>
        <div className='row'>
          <ProductCard image="car.jpg" title="Sarees" price={500} />
          <ProductCard image="toys.jpg" title="Western Dress" price={500} />
          <ProductCard image="health2.jpg" title="Shoes" price={500} />
          <ProductCard image="1.webp" title="Womens Heels" price={500} />
          <ProductCard image="makeup.jpg" title="Mens Shirts" price={500} />
          <ProductCard image="baby.jpg" title="Top Brands" price={500} />
        </div>
      </div>
    </>
  );
};

export default Trending_Products;
