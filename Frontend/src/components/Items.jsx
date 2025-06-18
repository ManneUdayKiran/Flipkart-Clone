import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Image, Card, Carousel, Pagination } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Skeleton from '@mui/material/Skeleton';

const { Meta } = Card;
const ITEMS_PER_PAGE = 15;

const Items = ({ searchTerm = '' }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Products'));
      const items = querySnapshot.docs.map(doc => doc.data());
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
    <div className='d-flex flex-column align-items-center justify-content-center'>
      {loading ? ( 
        <Skeleton variant="rectangular" width={240} height={300} />
      ) : (
        <>
          <Grid container spacing={2} className="mt-4">
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
                  <Card
                    hoverable
                    style={{
                      width: 240,
                      height: 380,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                    cover={
                      <div style={{ height: 230, overflow: 'hidden' }}>
                        <Carousel autoplay arrows dotPosition='left'>
                          <Image.PreviewGroup>
                            {images.map((img, i) => (
                              <Image
                                key={i}
                                src={img}
                                alt={item.product_name}
                                width="100%"
                                height="300px"
                                style={{ objectFit: 'contain' }}
                              />
                            ))}
                          </Image.PreviewGroup>
                        </Carousel>
                      </div>
                    }
                  >
                    <Meta
                      className='py-1'
                      title={item.product_name}
                      description={
                        <>
                          <p>Brand: {item.brand || 'N/A'}</p>
                          <p>Price: ₹{item.discounted_price || item.retail_price || 'N/A'}</p>
                          <p style={{ fontSize: '12px' }}>
                            {item.description?.length
                              ? item.description.slice(0, 80) + '...'
                              : 'No description available'}
                          </p>
                        </>
                      }
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <div className='m-3'>
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
