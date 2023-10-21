// AboutMe.js
import React from 'react';
import "../aboutme/aboutme.css";
import Avatar from "../../assets/pictures/avatar.jpg"
// Tạo một đối tượng đại diện cho thư mục assets
function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className='text'>
        <h2 id="greeting">Hello, I'm</h2>
        <h2 id="name">Le Dang Thuong</h2>
        <h2 id="greeting">As A Software Engineer</h2>
      </div>
      <div className='image'>
        <img src={Avatar} alt='Ảnh cá nhân' />
      </div>
  </div>
  );
}
export default AboutMe;
