import React from 'react';
import { Carousel } from 'antd';
import '../App.css';

const Hero = () => (
  <div
    className="container-fluid bg-light"
    style={{
      marginTop: '15px',
      marginBottom: '20px',
      backgroundColor: 'white',
      width: '100%',
    }}
  >
    <div
      className="container-fluid"
      style={{
        width: '99%',
        backgroundColor: 'white',
        borderRadius: '0px',
        padding: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        margin: '0 auto'
      }}
    >
      <Carousel arrows="true" className="hero-carousel" autoplay={{ dotDuration: true }} dotPosition="bottom" autoplaySpeed={2000}>
        <div className="d-flex justify-content-center align-items-center">
          <img  height="27%" width="44%" src="banner.avif" alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img height="30%" width="32%" src="dress.jpg" alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img height="27%" width="44%" src="banner.avif" alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img height="27%" width="44%" src="banner.avif" alt="" />
        </div>
      </Carousel>
    </div>
  </div>
);

export default Hero;
