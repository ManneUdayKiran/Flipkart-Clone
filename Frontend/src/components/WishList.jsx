import React from 'react';
import { useWishList } from '../context/WIshListContext';
import { Card, Button, Flex, Empty } from 'antd';

const WishList = () => {
  const { wishList, removeFromWishList } = useWishList();
  console.log("Current wishlist:", wishList);


  return (
    <div className="container mt-4">
      <h2>My Wishlist</h2>
      {wishList.length === 0 ? (
        <Empty description="No items in your wishlist" />
      ) : (
        wishList.map(item => (
          <Card style={{boxShadow:'0px 2px 4px rgba(0,0,0,0.1'}} key={item.id} title={item.product_name} className='mb-3'>
            <Flex justify="space-between" align="center">
              <img src={JSON.parse(item.image)[0]} alt={item.product_name} style={{ width: 100, objectFit: 'contain' }} />
              <Button danger onClick={() => removeFromWishList(item.id)}>Remove</Button>
            </Flex>
          </Card>
        ))
      )}
    </div>
  );
};

export default WishList;
