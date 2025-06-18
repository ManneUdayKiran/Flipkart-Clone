import React from 'react'
import { Col, Flex, Row } from 'antd';
import { Cascader } from 'antd';
import Home_kitchen from './Home_kitchen';
import '../App.css';
import { useLocation } from 'react-router-dom';

const NavItems = () => {
   const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';
  
  // const displayRender = labels => labels[labels.length - 1];
   

  return (
    <div className='container-fluid  bg-light' style={{ marginTop: '10px',
    marginBottom: '20px',
    backgroundColor: 'white',
    width: '100%', }}>
      
    <div className='container-fluid ' style={{marginTop: '10px',
    padding: '20px',
      marginBottom: '20px',
      backgroundColor: 'white',
      width: '99%',
      borderRadius: '0px',
     }}>
    <Flex justify="space-around" align="middle" style={{ backgroundColor: 'white', padding: '10px 0' }}>
      <a href="/electronics" style={{ textDecoration: 'none', color: 'black' }}> <div><img  height={70} width={150} src="electronics.png" alt="" /></div> Electronics</a>
        <a href="/fashion" style={{ textAlign:'center', textDecoration: 'none', color: 'black' }}><div><img  height={70} width={200} src="fashion.jpg" alt="" /></div>Fashion</a>
        <Home_kitchen/>
       
        <a href="/books" style={{textAlign:'center', textDecoration: 'none', color: 'black' }}><div><img  height={70} width={150} src="books.jpg" alt="" /></div>Books</a>
        <a href="/beauty-products" style={{ textDecoration: 'none', color: 'black' }}><div><img  height={70} width={150} src="beauty_products.webp" alt="" /></div>Beauty Products</a>
        <a href="/sports" style={{textAlign:'center', textDecoration: 'none', color: 'black' }}><div><img  height={70} width={150} src="sports.cms" alt="" /></div>Toys</a>
        <div>
            <img  height={70} width={70} src='Tea.webp'/> <div>
            <a href="/grocery" style={{textAlign:'center', textDecoration: 'none', color: 'black' }}>  Grocery</a>


            </div>

        </div>
        <a href="/health" style={{textAlign:'center', textDecoration: 'none', color: 'black' }}><div><img  height={70} width={150} src="health.jpeg" alt="" /></div>Health</a>
    </Flex>
    
    </div>
    </div>
  )
}

export default NavItems