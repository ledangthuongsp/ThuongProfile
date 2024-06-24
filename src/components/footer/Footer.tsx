import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-center md:text-left">Designed and Developed by Le Dang Thuong</p>
                <p className="text-center md:text-left">Copyright © 2024 Piller</p>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <MdEmail className="h-6 w-6" />
                        <p>ledangthuong2003@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="h-5 w-5" />
                        <p>+84 397 824 107</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
