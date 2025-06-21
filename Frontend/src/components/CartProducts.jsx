import React from "react";
import { Button, Card, Divider, Flex, Typography } from "antd";
import { useCart } from "../context/CartContext";
import { Popconfirm, message } from 'antd';
import {   Modal } from 'antd';
import { useState } from "react";

// import CartProducts from './CartProducts';

const cardStyle = {
  width: '100%',
  borderRadius: "0px",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
};

const imgStyle = {
  display: "block",
  width: 273,
  height: "220px",
  objectFit: "contain",
  paddingBottom: "30px",
};

const CartProducts = ({ image, title, onRemove, productLink }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => {
    onRemove(); // remove item logic
    setIsModalVisible(false);
  };
   const handleCancel = () => setIsModalVisible(false);
  return (
    <Card style={cardStyle} Style={{ padding: 0, overflow: "hidden" }}>
      <Flex justify="">
        <img alt='no image' src={image} style={imgStyle} />
        <Flex vertical style={{ padding: 23 }}>
          <div className="">
            {/* <Typography.Title style={{fontWeight:'none'}} className='' level={3}>{title}</Typography.Title> */}
            <p style={{ fontSize: "1em" }}>{title}</p>
          </div>
          <div className="d-flex gap-4" style={{ marginTop: "4rem" }}>
            <div className="">
              <Button
                className="m-1"
                style={{
                  textDecoration: "none",
                  fontSize: "17px",
                  fontFamily: " Helvetica",
                  fontWeight: "bold",
                }}
                type="none"
                href={productLink}
              >
                SAVED FOR LATER
              </Button>
            </div>
            <div>
              
            
  <Button
    className="m-1"
    style={{
      textDecoration: "none",
      fontSize: "17px",
      fontWeight: "bold",
    }}
    type="default"
    onClick={showModal}
  >
    REMOVE
  </Button>
   <Modal
        title="Confirm Removal"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, Remove"
        cancelText="Cancel"
      >
        <p>Are you sure you want to remove this product from your cart?</p>
      </Modal>
            </div>
          </div>
        </Flex>
      </Flex>
      
    </Card>
  );
};

export default CartProducts;
