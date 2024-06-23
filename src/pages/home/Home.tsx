import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Type from './Type';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import Avatar from '../../assets/avatar.png';
import ImageSection from '../../assets/backgrounds/blue_art.jpg'
const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-auto">
            <Navbar />
            <section className="h-screen" id="home">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight py-2 font-sans">
                            Hi There!{" "}
                            <span role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight py-2 font-sans">
                            I'M
                            <strong className="text-blue-500"> LE DANG THUONG</strong>
                        </h1>
                        <div className="py-2">
                            <Type />
                        </div>
                        <div className="flex space-x-6 py-2">
                            <a
                                href="https://www.instagram.com/_ddawng.pil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                <FaInstagram className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/p1ller"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                <FaLinkedin className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.facebook.com/ldt203.pw/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                <FaFacebook className="w-8 h-8" />
                            </a>
                            <a
                                href="https://github.com/LeDangThuong"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                <FaGithub className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                    <div className='md:w-2/5 flex justify-end items-center mt-16'>
                        <img className=' h-100 w-100 md:h-100 md:w-100' src={Avatar} alt="Avatar" />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-28'>
                    <img src={ImageSection} alt="" />
                </div>
            </section>
            <section className="h-screen bg-white">
                <div className=''></div>
            </section>
        </div>
    );
}

export default Home;
