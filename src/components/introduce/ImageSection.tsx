import React from 'react';
import './ImageSection.css';

const ImageSection: React.FC = () => {
    return (
        <section className="image-section relative">
            <div className="image-section-content relative w-full h-full flex justify-end items-start">
                <div className="button-container absolute top-[-20px] right-40 mt-[-60px]">
                    <div className="circle bg-white rounded-full p-2">
                        <button className="image-section-button p-2.5 text-lg rounded-full w-44 h-44 flex justify-center items-center transition-colors ease-in-out duration-300">
                            <span className="button-text">Get in Touch</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
