import React from 'react';
import { Menu, Divider, Typography } from 'antd';

const { Title } = Typography;

const LeftPane = () => {
  return (
    <div style={{ width: 250, padding: '1rem', backgroundColor: '#fff' }}>
      <Title level={4}>Filter</Title>
      <Divider />

      <Menu
        mode="inline"
        style={{ border: 'none' }}
        defaultOpenKeys={['categories', 'price', 'brand']}
      >
        <Menu.SubMenu key="categories" title="Categories">
          <Menu.Item key="cat1">Mobile</Menu.Item>
          <Menu.Item key="cat2">Laptops</Menu.Item>
          <Menu.Item key="cat3">Appliances</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="price" title="Price Range">
          <Menu.Item key="p1">Under ₹1000</Menu.Item>
          <Menu.Item key="p2">₹1000 - ₹5000</Menu.Item>
          <Menu.Item key="p3">Above ₹5000</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="brand" title="Brand">
          <Menu.Item key="b1">Apple</Menu.Item>
          <Menu.Item key="b2">Samsung</Menu.Item>
          <Menu.Item key="b3">HP</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="colors" title="Colors">
          <Menu.Item key="c1">Black</Menu.Item>
          <Menu.Item key="c2">White</Menu.Item>
          <Menu.Item key="c3">Blue</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="availability" title="Availability">
          <Menu.Item key="a1">In Stock</Menu.Item>
          <Menu.Item key="a2">Out of Stock</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="compatible" title="Compatible With">
          <Menu.Item key="cm1">Android</Menu.Item>
          <Menu.Item key="cm2">iOS</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="discount" title="Discount">
          <Menu.Item key="d1">10% or more</Menu.Item>
          <Menu.Item key="d2">25% or more</Menu.Item>
          <Menu.Item key="d3">50% or more</Menu.Item>
        </Menu.SubMenu>
        <Divider />

        <Menu.SubMenu key="offers" title="Offers">
          <Menu.Item key="o1">No Cost EMI</Menu.Item>
          <Menu.Item key="o2">Bank Offers</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default LeftPane;
