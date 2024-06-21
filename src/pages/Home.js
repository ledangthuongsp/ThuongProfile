import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto">
                <ProfileCard />
            </main>
        </div>
    );
};

export default Home;
