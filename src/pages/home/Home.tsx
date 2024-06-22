import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import Type from '../../components/type/type';
import './styles.css';
import Navbar from '../../components/navbar/Navbar';
import AvatarShape from '../../components/avatar/Avatar';
import Introduce from '../../components/introduce/Introduce';
import ImageSection from '../../components/introduce/ImageSection';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="home-section" id="home">
                <div className="home-content">
                    <div className="home-header">
                        <h1 className="heading">
                            Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                        </h1>
                        <h1 className="heading-name">
                            I'M <strong className="main-name">LE DANG THUONG</strong>
                        </h1>
                        <div className="type-wrapper">
                            <Type />
                        </div>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/_ddawng.pil" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/p1ller" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://www.facebook.com/ldt203.pw/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="icon" />
                            </a>
                            <a href="https://github.com/LeDangThuong" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                        </div>
                    </div>
                    <AvatarShape />
                </div>
            </section>
            <ImageSection />
            <Introduce />
        </>
    );
};

export default Home;
