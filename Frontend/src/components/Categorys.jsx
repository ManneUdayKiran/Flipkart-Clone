import React from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: 'Mobile',
    key: '0',
  },
  {
    label: 'Laptops',
    key: '1',
  },
  {
    label: 'Cameras',
    key: '2',
  }
]
const Categorys = () => {
  return (
    <div style={{borderBottom:'1px solid #eff1f4',boxShadow:' 0px  2px 4px rgba(0,0,0,0.1)'}} className='container-fluid m-0 p-0'>
        <div className='container-fluid d-flex gap-5 bg-white p-2 flex-wrap justify-content-center align-items-center' >
            <Dropdown   className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space  >
        Electronics
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Tv & Appliances
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Men
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Women
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Baby & Kids
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Home & furniture
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Sports, Books & More
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            <Dropdown className='text-black' placement='top' arrow={true} menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
       offer zone
        <DownOutlined />
        {/* <UpOutlined/> */}
      </Space>
    </a>
  </Dropdown>

        </div>
    </div>
  )
}

export default Categorys