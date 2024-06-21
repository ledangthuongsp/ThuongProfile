import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-[var(--teal-dark-1)] text-[var(--teal-dark-5)] min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Hi There! 👋</h1>
                <h2 className="text-3xl font-bold mt-2">I'M LE DANG THUONG</h2>
                <p className="text-xl mt-2">Software Developer</p>
            </div>
            <div className="mt-8 flex justify-center">
                <img src="path_to_your_image" alt="Illustration" className="w-32 h-32 md:w-64 md:h-64 object-cover" />
            </div>
        </section>
    );
};

export default Hero;
