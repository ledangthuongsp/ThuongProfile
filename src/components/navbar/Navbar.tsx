import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import { ImBlog } from 'react-icons/im';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineMenu,
    AiOutlineClose
} from 'react-icons/ai';

const NavBar: React.FC = () => {
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
        <nav className={`sticky bg-white top-0 w-full z-50 transition-all duration-300 drop-shadow-sm ${navColour ? 'bg-gray-100' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center justify-between p-4 text-black">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center text-lg font-light" onClick={() => setExpand(false)}>
                        <span className='font-paytone text-2xl'>Piller</span>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setExpand(!expand)} className="text-2xl focus:outline-none">
                        {expand ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
                <div className={`md:flex space-x-16 hidden ${expand ? 'flex-row-reverse' : 'hidden'}`}>
                    {[
                        { to: '/ThuongProfile/', icon: AiOutlineHome, label: 'Home' },
                        { to: '/ThuongProfile/about', icon: AiOutlineUser, label: 'About' },
                        { to: '/ThuongProfile/projects', icon: AiOutlineFundProjectionScreen, label: 'Projects' },
                        { to: '/ThuongProfile/resume', icon: CgFileDocument, label: 'Resume' },
                        { to: '/ThuongProfile/blog', icon: ImBlog, label: 'Blog' },
                    ].map(({ to, icon: Icon, label }) => (
                        <Link
                            key={label}
                            to={to}
                            className={`relative flex items-center text-lg font-semibold font-sans group ${expand ? 'ml-6' : ''}`}
                            onClick={() => setExpand(false)}
                        >
                            <Icon className="mr-2 text-xl" />
                            {label}
                            <span className={`absolute -my-2 bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
                        </Link>
                    ))}
                    <a
                        href="https://github.com/ledangthuongsp"
                        target="_blank"
                        rel="noreferrer"
                        className={`relative flex items-center text-lg font-semibold font-sans group ${expand ? 'ml-6' : ''}`}
                    >
                        <CgGitFork className="mr-2 text-xl" />
                        <AiFillStar className="text-xl" />
                        <span className={`absolute -my-2  bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </a>
                </div>
            </div>
            {expand && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white text-black">
                    {[
                        { to: '/ThuongProfile/', icon: AiOutlineHome, label: 'Home' },
                        { to: '/ThuongProfile/about', icon: AiOutlineUser, label: 'About' },
                        { to: '/ThuongProfile/projects', icon: AiOutlineFundProjectionScreen, label: 'Projects' },
                        { to: '/ThuongProfile/resume', icon: CgFileDocument, label: 'Resume' },
                        { to: '/ThuongProfile/blog', icon: ImBlog, label: 'Blog' },
                    ].map(({ to, icon: Icon, label }) => (
                        <Link
                            key={label}
                            to={to}
                            className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
                            onClick={() => setExpand(false)}
                        >
                            <Icon className="mr-2" /> {label}
                        </Link>
                    ))}
                    <a
                        href="https://github.com/ledangthuongsp"
                        target="_blank"
                        rel="noreferrer"
                        className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
                    >
                        <CgGitFork className="mr-2" /> <AiFillStar />
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
