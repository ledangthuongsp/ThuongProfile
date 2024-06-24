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

const About: React.FC = () => {
    return (
        <>
            <div>
                <h1 className="my-16 text-center text-4xl">
                    Majoring
                </h1>
            </div>

            <div className="pb-8">
                <h1 className="my-8 text-center text-4xl">
                    <span className="font-sans font-semibold text-cyan-400">Technologies</span> and <span className="font-sans font-semibold text-cyan-400">Frameworks</span> I used
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
                <h1 className="my-8 text-center text-4xl">
                    <span className="font-sans font-semibold text-cyan-400">Tools</span> I used
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
        </>
    );
}
export default About;