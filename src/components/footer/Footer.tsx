import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container mx-auto flex justify-between items-center">
                <p>Designed and Developed by Le Dang Thuong</p>
                <p>Copyright © 2024 Piller</p>
                <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <MdEmail className="h-6 w-6" />
                        <p>ledangthuongsp@gmail.com</p>
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