import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  UserOutlined,
  SettingOutlined,
  CoffeeOutlined
} from '@ant-design/icons';
import Logo from '../../imgs/people-avatar-icon-png.webp';
import './Menu.css';

const Header = () => {
  return (
    <div id="navbarid" class="navbar">
      <div class="logo">
        <ul>
          <li><img src={Logo} alt="Logo" /></li>
          <li> <div class="site-name">Jakkit Wongtewee</div></li>
        </ul>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        {/* <li><Link to="/skills">Skills</Link></li> */}
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </div>
  );
}

export default Header;