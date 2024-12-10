import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Type from './Type';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import Avatar from '../../assets/avatar.png';
import Aboutme from '../../assets/avatar2.jpg';
import BackgroundImage from '../../assets/backgrounds/white_background.jpg'; // Update the path according to your project structure

const Home: React.FC = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { once: true });

    return (
        <div className="flex flex-col min-h-screen">
            <div className="mx-auto flex flex-col md:flex-row items-center justify-center px-4">
                <motion.div
                    className="fixed text-[20vh] md:text-[80vh] items-center mb-36 whitespace-nowrap text-gray-300 font-sans font-bold opacity-50"
                    id='lineback'
                    initial={{ x: 0 }}
                    animate={{
                        x: "-100%",
                        transition: {
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 10,
                        }
                    }}
                    style={{ width: '100% ', zIndex: -1 }}
                >
                    ThuongLe
                </motion.div>
                <motion.div
                    className="flex flex-col justify-center w-full md:w-1/2"
                    id='intro'
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
                            href="https://www.instagram.com/_thuong.ld"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <FaInstagram className="w-8 h-8" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ledangthuongsp"
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
                            href="https://github.com/ledangthuongsp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className='flex w-full md:w-1/2 justify-center md:justify-end items-center mt-8 md:mt-0 py-10'
                    id='avatar'
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img className='h-auto w-3/4 md:w-auto' src={Avatar} alt="Avatar" />
                </motion.div>
            </div>

            <div className="relative flex flex-col">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                ></div>
                <div className="relative flex flex-col md:flex-row items-center justify-center px-4 py-16 h-full">
                    <div className="flex w-full md:w-1/2 justify-center md:justify-end items-center mt-8 md:mt-0 py-36 h-full">
                        <img className="h-full w-11/12 md:w-11/12 rounded-lg object-cover" src={Aboutme} alt="Avatar" />
                    </div>
                    <div className="relative flex flex-col justify-center w-full md:w-2/3 md:flex-col bg-opacity-60 bg-white px-8 md:px-16 rounded-lg h-full">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight py-2 font-sans text-black text-justify-left">
                            LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
                        </h1>
                        <p className="home-about-body text-lg mt-4 text-black text-justify font-sans font-normal">
                            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                            <br /><br />
                            I am a sociable and easy-going person, always striving for improvement.
                            I possess excellent <span className="text-blue-500 font-bold">teamwork skills, leadership abilities, presentation skills, and communication skills.</span>
                            <br /><br />
                            I enjoy working with <span className="text-blue-500 font-bold">Java Spring Boot</span> the most because it gives me comfort while working.
                            <br /><br />
                            I also have experience working on several school projects using <span className="text-blue-500 font-bold">Flutter, React, NodeJS, MongoDB, and ExpressJS</span>.
                            <br /><br />
                            Additionally, I can apply <span className="text-blue-500 font-bold">Design Patterns</span> and have a solid grasp of <span className="text-blue-500 font-bold">Object-Oriented Programming (OOP)</span>.
                            <br /><br />Besides the languages mentioned above, I am also well-versed in traditional languages like <span className="text-blue-500 font-bold">C, C#, and C++.</span>  It's improve my algorithm to solve problems.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
