import React from "react";
import { RiReactjsLine } from 'react-icons/ri'
const About: React.FC = () => {
    return (
        <>
            <div>
                <h1 className="my-20 text-center text-4xl">
                    Majoring
                </h1>
            </div>
            <div className=" pb-24">
                <h1 className="my-20 text-center text-4xl">
                    Technologies
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                </div>

            </div>
            <div className="pb-24">
                <h1 className="my-20 text-center text-4xl">
                    <span className="font-sans font-semibold text-cyan-400">Tools</span>  I use
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                </div>

            </div>
        </>
    );
}
export default About;