import { Button } from "antd";
import React from "react";
import CartProducts from "./CartProducts";
import { useCart } from "../context/CartContext";

const CartItems = () => {
  const { cartItems, removeFromCart } = useCart();
  return (
    <>
      <div
        style={{
          border: "2px solid #f2f3f7",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        }}
        className=" my-4 p-3 container d-xxl-flex  justify-content-between"
      >
        <div>
          <p>From Saved Addresses</p>
        </div>
        <div>
          <Button
            style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.1) ", color: "blue" }}
            className="hover:none"
            color="blue"
          >
            Enter Delivery Pincode
          </Button>
        </div>
      </div>
      <div className="container ">
        <div>

        {cartItems.map((item, idx) => {
          let images = [];
          try {
            images = JSON.parse(item.image);
          } catch {
            images = [];
          }

          return (
            <CartProducts
              key={idx}
              image={images[0]}
              title={item.product_name}
              onRemove={() => removeFromCart(item.id)}
              productLink={`/product/${item.id}`}
            />
          );
        })}
          </div>
      </div>
    </>
  );
};

export default CartItems;
