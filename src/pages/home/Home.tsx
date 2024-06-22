import React from 'react';
import Type from '../../components/type/type';
import './styles.css';
import Navbar from '../../components/navbar/Navbar';
import AvatarShape from '../../components/avatar/Avatar';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="home-section home-overlay" id="home">
                <div className="home-content">
                    <div className="home-header">
                        <h1 className="heading">
                            Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                        </h1>
                        <h1 className="heading-name">
                            I'M <strong className="main-name">LE DANG THUONG</strong>
                        </h1>
                        <div className="type-wrapper">
                            <Type />
                        </div>
                    </div>
                    <AvatarShape />
                </div>
            </section>
        </>
    );
};

export default Home;
