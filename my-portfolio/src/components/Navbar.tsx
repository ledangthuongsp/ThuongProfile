import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[var(--teal-dark-2)] shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-[var(--teal-dark-5)]">Piller</div>
                <div className="hidden md:flex space-x-4 text-[var(--teal-dark-5)]">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#resume">Resume</a>
                    <a href="#blogs">Blogs</a>
                </div>
                <div className="text-[var(--teal-dark-5)]">⭐</div>
            </div>
        </nav>
    );
};

export default Navbar;
