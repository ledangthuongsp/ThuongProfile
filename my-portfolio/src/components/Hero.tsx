import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-dark-purple text-white min-h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Hi There! 👋</h1>
                <h2 className="text-3xl font-bold mt-2">I'M LE DANG THUONG</h2>
                <p className="text-xl mt-2">Software Developer</p>
            </div>
            <div className="mt-8">
                <img src="path_to_your_image" alt="Illustration" className="w-64 h-64" />
            </div>
        </section>
    );
};

export default Hero;
