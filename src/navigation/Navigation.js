// Navigation.js
import React from 'react';
import '../navigation/Navigation.css';
import MyAvatar from '../assets/pictures/myava.png';
function Navigation() {
  return (
    <nav className="navigation">
    <div className="avatar-container">
      <img src={MyAvatar} alt='Ảnh đại diện' />
    </div>
    <ul>
      <li><a href="/">Work</a></li>
      <li><a href="/about">About Me</a></li>
      <li><a href="/products">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  );
}

export default Navigation;
