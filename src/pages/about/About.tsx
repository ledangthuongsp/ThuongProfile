import React from "react";
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { animate, motion } from 'framer-motion'
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiJetbrains } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import Github from "./Github";
import AboutBg from '../../assets/backgrounds/about_background.png'
import { ImPointRight } from "react-icons/im";

const iconVariants = (duration: any) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse" as const,
        }
    }
})
const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
const About: React.FC = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
            >
                {/* Introduction Section */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
                    <motion.div
                        className="flex flex-col justify-center w-full md:w-1/2"
                        id='intro'
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-2xl md:text-4xl font-bold leading-tight py-2 font-sans">
                            Hi Everyone!{" "}
                            <span role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h2 className="text-lg md:text-xl font-normal leading-tight font-sans">
                            My full name is <span className="text-cyan-500 font-semibold">Le Dang Thuong</span>, but I prefer to be called <span className="text-cyan-500 font-semibold">Piller</span>.<br></br>
                            I'm now living at <span className="text-cyan-500 font-semibold">Ho Chi Minh City</span>.
                        </h2>
                        <h2 className="text-lg md:text-xl font-normal leading-tight font-sans">
                            I'm majoring in <span className="text-cyan-500 font-semibold">Software Engineer</span> at <span className="text-cyan-500 font-semibold">University of Information Technology</span>.
                        </h2>
                        <br></br>
                        <h2 className="text-lg md:text-xl font-normal leading-tight font-sans">
                            Apart from coding, some other activities that I love to do!
                        </h2>
                        <h2 className="text-lg md:text-xl font-normal leading-tight font-sans pt-2">
                            <ul className="list-none ml-4">
                                <li className="flex items-center mb-2">
                                    <ImPointRight className="mr-2" />
                                    <span>Playing Games</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <ImPointRight className="mr-2" />
                                    <span>Playing Sports like Football and Volleyball</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <ImPointRight className="mr-2" />
                                    <span>Learning guitar</span>
                                </li>
                                <li className="flex items-center">
                                    <ImPointRight className="mr-2" />
                                    <span>Travelling to different places to take photos</span>
                                </li>
                            </ul>

                        </h2>
                    </motion.div>
                    <motion.div
                        className='flex w-full md:w-1/2 justify-center md:justify-end items-center mt-8 md:mt-0 py-10'
                        id='avatar'
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img className='h-auto w-3/4 md:w-auto' src={AboutBg} alt="Avatar" />
                    </motion.div>
                </div>


                <div className="pb-8">
                    <h1 className="my-8 text-center text-4xl font-sans font-semibold">
                        <span className="font-sans font-bold text-cyan-400">Technologies</span> and <span className="font-sans font-bold text-cyan-400">Frameworks</span> I used
                    </h1>
                    <div className="flex flex-wrap mx-auto items-center justify-center gap-4">
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <SiSpring className="text-7xl text-green-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <RiFlutterFill className="text-7xl text-cyan-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <FaNodeJs className="text-7xl text-green-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <RiFirebaseFill className="text-7xl text-yellow-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <BiLogoPostgresql className="text-7xl text-cyan-600" />
                        </div>

                    </div>
                    <div className="flex flex-wrap mx-auto items-center justify-center gap-4 py-8 ">
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <RiReactjsLine className="text-7xl text-cyan-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <SiMongodb className="text-7xl text-green-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <DiRedis className="text-7xl text-red-600" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <FaJava className="text-7xl text-orange-400" />
                        </div>
                        <div className="rounded-2xl border-2 border-neutral-400 p-4 px-16 hover:scale-110 hover:border-gray-600 transition-transform duration-300">
                            <SiCplusplus className="text-7xl text-blue-500" />
                        </div>
                    </div>

                </div>
                <div className=" pb-8">
                    <h1 className="my-8 text-center text-4xl font-sans font-semibold">
                        <span className="font-sans font-bold text-cyan-400">Tools</span> I used
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                            variants={iconVariants(2.5)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 p-4"
                        >
                            <VscVscode className="text-7xl text-cyan-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(2.25)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 p-4"
                        >
                            <SiJetbrains className="text-7xl text-yellow-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(2.75)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 p-4"
                        >
                            <SiPostman className="text-7xl text-orange-500" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(2)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 p-4"
                        >
                            <FaGitAlt className="text-7xl text-orange-400" />
                        </motion.div>
                    </div>
                </div >
                <div className="pt-8">
                    <Github />
                </div>
            </motion.div>
        </>
    );
}
export default About;