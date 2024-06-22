import React from 'react';
import './Introduce.css';

const Introduce: React.FC = () => {
    return (
        <div className="introduce-section">
            <h1 className="introduce-heading">
                LET ME <span className="highlight">INTRODUCE</span> MYSELF.
            </h1>
            <p className="introduction-text">
                I fell in love with programming and I have at least learnt something, I think... <span role="img" aria-labelledby="thinking">🤷</span>
            </p>
            <p className="introduction-text">
                I am fluent in classics like <strong>C++, Javascript, and Go.</strong>
            </p>
            <p className="introduction-text">
                My field of Interest's are building new <strong>Web Technologies and Products</strong> and also in areas related to <strong>Blockchain.</strong>
            </p>
            <p className="introduction-text">
                Whenever possible, I also apply my passion for developing products with <strong>Node.js</strong> and <strong>Modern Javascript Library and Frameworks</strong> like <strong>React.js</strong> and <strong>Next.js</strong>
            </p>
        </div>
    );
};

export default Introduce;
