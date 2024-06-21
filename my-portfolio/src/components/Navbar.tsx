import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-dark-purple shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-white">Sb.</div>
                <div className="flex space-x-4 text-white">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#resume">Resume</a>
                    <a href="#blogs">Blogs</a>
                </div>
                <div className="text-white">⭐</div>
            </div>
        </nav>
    );
};

export default Navbar;
