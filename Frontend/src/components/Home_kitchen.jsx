import React from 'react'
import { useRef } from 'react';
import { Cascader } from 'antd';
import '../App.css'
const Home_kitchen = () => {
    const cascaderRef = useRef(null);

    const options = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            
          },
        ],
      },
    ];
    const onClick = value => {
      console.log(value);
    };
    
  return (
    <div> <a href="/home-appliances" style={{ textDecoration: 'none', color: 'black' }}><div><img  height={70} width={150} src="home_appliances.jpg" alt="" /></div>
       </a>
        <div>
       <Cascader
        ref={cascaderRef}
        options={options}
        expandTrigger="hover"
        placeholder="Home & Kitchen"
        openClassName="hover-open"
        className="custom-cascader"
        
      />

       </div> </div>
  )
}

export default Home_kitchen