
import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, AppstoreAddOutlined, PhoneOutlined } from '@ant-design/icons';
import './HeaderMenu.css'; // นำเข้า CSS สไตล์ที่สร้างขึ้น
import { Menu } from 'antd';

const Header = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);

  };
  return (
    <div className="menu-container">
      <div className="logo">
        <UserOutlined />
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">หน้าหลัก</Menu.Item>
        <Menu.Item key="2">เกี่ยวกับเรา</Menu.Item>
        <Menu.Item key="3">บริการของเรา</Menu.Item>
        <Menu.Item key="4">ติดต่อเรา</Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;