import React from 'react';
import { ReactTyped } from 'react-typed';

const Type: React.FC = () => {
    return (
        <ReactTyped
            strings={['MERN STACK DEVELOPER', 'FULL STACK DEVELOPER', 'UI/UX DESIGN']}
            typeSpeed={50}
            backSpeed={50}
            loop
        />
    );
};

export default Type;
