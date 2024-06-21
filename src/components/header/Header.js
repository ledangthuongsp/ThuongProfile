import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <nav className="flex justify-between items-center">
                <div className="text-xl font-bold">Le Dang Thuong</div>
                <div>
                    <a href="#work" className="mr-4">Work</a>
                    <a href="#about" className="mr-4">About Me</a>
                    <a href="#blog" className="mr-4">Blog</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
