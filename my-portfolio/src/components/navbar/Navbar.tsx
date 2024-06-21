import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { ImBlog } from 'react-icons/im';
import logo from '../../assets/icons/logo.png';
import '../navbar/styles.css'; // Import tệp CSS tùy chỉnh

const Navbar: React.FC = () => {
    const [expand, setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <nav className={`navbar ${navColour ? 'navbar-bg' : 'navbar-transparent'}`}>
            <div className="navbar-container">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="brand" className="navbar-logo" />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-16-custom text-[var(--white)]">
                    <Link to="/" className="navbar-link" onClick={() => setExpand(false)}>
                        <AiOutlineHome className="navbar-icon" />
                        <span>Home</span>
                        <span className={`navbar-underline navbar-underline-about navbar-underline-offset`}></span>
                    </Link>
                    <Link to="/about" className="navbar-link" onClick={() => setExpand(false)}>
                        <AiOutlineUser className="navbar-icon" />
                        <span>About</span>
                        <span className={`navbar-underline navbar-underline-about navbar-underline-offset`}></span>
                    </Link>
                    <Link to="/project" className="navbar-link" onClick={() => setExpand(false)}>
                        <AiOutlineFundProjectionScreen className="navbar-icon" />
                        <span>Projects</span>
                        <span className={`navbar-underline navbar-underline-projects navbar-underline-offset`}></span>
                    </Link>
                    <Link to="/resume" className="navbar-link" onClick={() => setExpand(false)}>
                        <CgFileDocument className="navbar-icon" />
                        <span>Resume</span>
                        <span className={`navbar-underline navbar-underline-resume navbar-underline-offset`}></span>
                    </Link>
                    <Link to="/blog" className="navbar-link" onClick={() => setExpand(false)}>
                        <ImBlog className="navbar-icon" />
                        <span>Blogs</span>
                        <span className={`navbar-underline navbar-underline-blogs navbar-underline-offset`}></span>
                    </Link>
                </div>

                <div className="navbar-mobile">
                    <button onClick={() => setExpand(!expand)} className="navbar-mobile-btn">
                        <span className="text-2xl">&#9776;</span>
                    </button>
                </div>
            </div>
            {expand && (
                <div className="navbar-mobile-menu">
                    <Link to="/" className="navbar-mobile-link" onClick={() => setExpand(false)}>
                        <AiOutlineHome className="mr-1" /> Home
                    </Link>
                    <Link to="/about" className="navbar-mobile-link" onClick={() => setExpand(false)}>
                        <AiOutlineUser className="mr-1" /> About
                    </Link>
                    <Link to="/project" className="navbar-mobile-link" onClick={() => setExpand(false)}>
                        <AiOutlineFundProjectionScreen className="mr-1" /> Projects
                    </Link>
                    <Link to="/resume" className="navbar-mobile-link" onClick={() => setExpand(false)}>
                        <CgFileDocument className="mr-1" /> Resume
                    </Link>
                    <Link to="/blog" className="navbar-mobile-link" onClick={() => setExpand(false)}>
                        <ImBlog className="mr-1" /> Blog
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
