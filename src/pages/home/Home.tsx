import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Type from './Type';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import Avatar from '../../assets/avatar.png';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-auto">
            <Navbar />
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
                <motion.div
                    className="flex flex-col justify-center md:w-1/2"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
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
                </motion.div>
                <motion.div
                    className='flex md:w-1/2 justify-center md:justify-end items-center mt-8 md:mt-0 py-10'
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img className='h-auto w-3/4 md:w-auto' src={Avatar} alt="Avatar" />
                </motion.div>
            </div>

            <section className="h-screen bg-black">
                <div className=''></div>
            </section>
        </div>
    );
}

export default Home;
