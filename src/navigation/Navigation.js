// Navigation.js
import React from 'react';
import '../navigation/Navigation.css';

function Navigation() {
  return (
    
    <nav className="navigation">
      <img src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/265706575_439139374425044_4439484882170640413_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HnQr5FfL_DAAX9wzK0a&_nc_ht=scontent.fsgn5-6.fna&_nc_e2o=f&oh=00_AfAA9mfD33eG9GkJX4rBfh6mhSX8qZxDkvQvlv_6rtwshQ&oe=6530993B' alt='Ảnh đại diện'/>
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
