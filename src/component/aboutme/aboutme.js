// AboutMe.js
import React from 'react';
import "../aboutme/aboutme.css";
import Avatar from "../../assets/pictures/avatar.jpg"
import IconGithub from "../../assets/pictures/github.png"
import IconLinkedIn from "../../assets/pictures/brandico_linkedin.png"
import IconFacebook from "../../assets/pictures/icon_fb.png"
import IconInstagram from "../../assets/pictures/ins.png"

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className='text'>
        <h2 id="greeting">Hello, I'm</h2>
        <h2 id="name">Le Dang Thuong</h2>
        <h2 id="greeting">As A Software Engineer</h2>
        <div className='icon'>
          <a href="https://github.com/LeDangThuong">
            <img src={IconGithub} alt='GitHub'/>
          </a>
          <a href="https://www.linkedin.com/in/p1ller/">
            <img src={IconLinkedIn} alt='LinkedIn'/>
          </a>
          <a href="https://www.facebook.com/ldt203.pw">
            <img src={IconFacebook} alt='Facebook'/>
          </a>
          <a href="https://www.instagram.com/tld_._">
            <img src={IconInstagram} alt='Instagram'/>
          </a>
        </div>
        <div>  
          <button id="getResume" className="white-button">Get My Resume</button>
          <button id="seeResume" className="black-button">See My Resume</button>
        </div>

      </div>
      <div className='image'>
        <img src={Avatar} alt='Ảnh cá nhân' />
      </div>
    </div>
  );
}
export default AboutMe;
