import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Image, Card, Carousel, Pagination,Rate } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Skeleton from '@mui/material/Skeleton';
import Rating from './Rating';
import AddtoWishList from './AddtoWishList';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftPane from './LeftPanel';
import { useNavigate } from 'react-router-dom';


const { Meta } = Card;
const ITEMS_PER_PAGE = 15;

const Items = ({ searchTerm = '' }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Products'));
      // const items = querySnapshot.docs.map(doc => doc.data());
      const items = querySnapshot.docs.map(doc => ({
  id: doc.id,         // ✅ add this
  ...doc.data()
}));
      setProducts(items);
      setFilteredProducts(items); // initial filtered state
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();

    const results = products.filter(item => {
      const name = item.product_name?.toLowerCase() || '';
      const category = item.product_category_tree?.toLowerCase() || '';
      const brand = item.brand?.toLowerCase() || '';
      return (
        name.includes(term) ||
        category.includes(term) ||
        brand.includes(term)
      );
    });

    setFilteredProducts(results);
    setCurrentPage(1); // reset to page 1 on search
  }, [searchTerm, products]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className='d-flex flex-column gap-3 m-3 '>
      {loading ? ( 
        <div className='d-flex flex-row gap-3 m-3 '>
        <div>
           <Skeleton  variant="rectangular" width={240} height={700} />

        </div>
        <div className='d-flex gap-5 flex-wrap flex-fill'>
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />
                           <Skeleton  variant="rectangular" width={240} height={300} />

        </div>

       
        </div>
        
      ) : (
        <>
              

        <div className='d-flex   gap-3'>
          <div className=' m-0 p-2'>

        <LeftPane/>
          </div>
          <div>
             <h2 className=''>Results for {searchTerm}:</h2>
          


          <Grid container spacing={2} className="mt-0">
                     

            {currentItems.map((item, index) => {
              let images = [];
              try {
                images = JSON.parse(item.image);
                if (!Array.isArray(images)) images = [];
              } catch {
                images = [];
              }

              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <div onClick={() => navigate(`/product/${item.id}`)} >

                   
                  <Card
                    hoverable
                    style={{
                      width: 280,
                      height: 380,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                    cover={
                      <div  style={{ height: 220, overflow: 'hidden' }}>
 <div
 onClick={(e) => {
    e.stopPropagation(); 
  }}
      style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        zIndex: 2,
        
      }}
    >
<AddtoWishList product={item} />
    </div>                                        

                        
                        <Carousel autoplay={true}  dotPosition='left'>
                          
                          <Image.PreviewGroup>
                            {images.map((img, i) => {
  const secureUrl = img.startsWith('http://')
    ? img.replace('http://', 'https://')
    : img;
  return (
    <Image
      key={i}
      src={secureImg}
      alt={item.product_name}
      width="100%"
      height="300px"
      style={{ objectFit: 'contain' }}
      className='p-2'
    />
  );
})}
                          </Image.PreviewGroup>
                        </Carousel>
                      </div>
                    }
                  >
                    <Meta
                        className=''
                        title={item.product_name}
                        description={
                          <>
                            <p style={{color:'black'}} className='m-0'>Brand: {item.brand || 'N/A'}</p>
                            <p className='m-0'>
                              <Rating/>
                            </p>
                            <p style={{color:'black',fontWeight:'bold',fontSize:'1rem'}} className='m-0'>₹{item.discounted_price || item.retail_price || 'N/A'} <span style={{color:'gray',textDecoration:'line-through',fontSize:'14px',fontWeight:'normal'}} className='mx-2'>₹{item.retail_price}    </span> <span> {item.offer} </span>  </p>
                            <p style={{color:'green'}}>
                              Bank Offer
                            </p>
                            {/* <p style={{ fontSize: '12px' }}>
                              {item.description?.length
                              ? item.description.slice(0, 80) + '...'
                              : 'No description available'}
                            </p> */}
                          </>
                        }
                      />
                  </Card>
                        </div>
                </Grid>
              );
            })}
          </Grid>
              </div>
            </div>

          <div className='m-3 d-flex justify-content-center align-items-center'>
            <Pagination
              current={currentPage}
              pageSize={ITEMS_PER_PAGE}
              total={filteredProducts.length}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
              />
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
