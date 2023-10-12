// Navigation.js
import React from 'react';
import '../navigation/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/">Home Page</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/products">My Product</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
