import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Card, Image, Typography, Flex, Spin } from "antd";
import Rating from "./Rating"; // Make sure this component exists
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import { useCart } from "../context/CartContext";


const { Title, Paragraph } = Typography;

const ProductView = () => {
  const { addToCart } = useCart();
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "Products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <Spin size="large" style={{ display: "block", margin: "100px auto" }} />
    );

  let images = [];
  try {
    images = JSON.parse(product.image);
    if (!Array.isArray(images)) images = [];
  } catch {
    images = [];
  }

  return (
    <div className="container mt-1">
      <Flex gap="large" wrap="wrap" justify="flex-start">
        {/* Image Card (Left Side) */}
        <Card
          style={{ width: 480 }}
          cover={
            <Image
               src={images[0]?.replace(/^http:\/\//i, 'https://')}
              alt={product.product_name}
              height={440}
              width={450}
              style={{ objectFit: "contain", padding: "30px" }}
            />
          }
        >
          <div className="d-flex gap-2 ">
            <div>
              <button
                onClick={()=> addToCart(product)}
                style={{
                  backgroundColor: "#ff9f00",
                  color: "white",
                  border: "none",
                  borderRadius: "2px",
                }}
                className=" px-5 py-3 fw-bold"
              >
                {" "}
                <ShoppingCartIcon /> ADD TO CART
              </button>
              {/* <button onClick={testNotification}>Test Notification</button> */}

            </div>

            <div>
              <button
                style={{
                  backgroundColor: "#fb641b",
                  color: "white",
                  border: "none",
                  borderRadius: "2px",
                }}
                className=" px-lg-5 py-3 fw-bold"
              >
                {" "}
                <BoltIcon /> BUY NOW
              </button>
            </div>
          </div>
        </Card>

        {/* Product Details Card (Right Side) */}
        <Card style={{ flex: 1, minWidth: 300 }}>
          <Title level={5}>{product.product_name}</Title>
          {/* <p style={{ color: 'black' }} className="m-0">
            Brand: {product.brand || 'N/A'}
          </p> */}
          <p className="m-0">
            <Rating />
          </p>
          <br />
          <p
            style={{ color: "green", fontWeight: "bold", fontSize: "1em" }}
            className="m-0"
          >
            EXTRA ₹{product.retail_price - product.discounted_price} OFF
          </p>
          <p
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
            className="m-0"
          >
            ₹{product.discounted_price || product.retail_price || "N/A"}{" "}
            <span
              style={{
                color: "gray",
                textDecoration: "line-through",
                fontSize: "20px",
                fontWeight: "normal",
              }}
              className="mx-2"
            >
              ₹{product.retail_price}
            </span>{" "}
            <span
              style={{
                color: "green",
                fontSize: "18px",
                fontWeight: "normal",
              }}
            >
              {(
                ((product.retail_price - product.discounted_price) /
                  product.retail_price) *
                100
              ).toFixed(0)}
              % off
            </span>
          </p>
          <p>+ ₹109 Secured Packaging Fee</p>
          <br />
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>
            Available Offers
          </p>
          <p>
            {" "}
            <LocalOfferSharpIcon
              fontSize="small"
              color="success"
              style={{ marginRight: "8px" }}
            />
            <span className="fw-bold">Bank Offer</span> 100% Cashback upto 500Rs
            on Axis Bank SuperMoney Rupay CC UPI transactions on super.money
            UPIT&C{" "}
          </p>
          <p>
            {" "}
            <LocalOfferSharpIcon
              fontSize="small"
              color="success"
              style={{ marginRight: "8px" }}
            />
            <span className="fw-bold">Bank Offer</span> ₹750 on HDFC Bank Pixel
            Credit Card EMI on 6 months tenure. Min Txn Value: ₹7500T&C
          </p>
          <p>
            {" "}
            <LocalOfferSharpIcon
              fontSize="small"
              color="success"
              style={{ marginRight: "8px" }}
            />
            <span className="fw-bold">Bank Offer</span> 5% cashback on Flipkart
            Axis Bank Credit Card upto ₹4,000 per statement quarterT&C
          </p>
        </Card>
      </Flex>
    </div>
  );
};

export default ProductView;
