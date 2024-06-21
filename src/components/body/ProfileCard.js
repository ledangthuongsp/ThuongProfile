import React from 'react';

const ProfileCard = () => {
    return (
        <div className="text-center py-8">
            <img src="your_image_url" alt="Profile" className="rounded-full w-32 mx-auto" />
            <h1 className="text-3xl font-bold mt-4">Hello, I'm Le Dang Thuong</h1>
            <p className="text-lg">As A Software Engineer</p>
            <div className="flex justify-center mt-4">
                <a href="your_github_url" className="mx-2">GitHub</a>
                <a href="your_linkedin_url" className="mx-2">LinkedIn</a>
                <a href="your_instagram_url" className="mx-2">Instagram</a>
            </div>
            <div className="mt-4">
                <button className="bg-black text-white px-4 py-2 mr-2">Get My Resume</button>
                <button className="border border-black px-4 py-2">See My Resume</button>
            </div>
        </div>
    );
};

export default ProfileCard;
