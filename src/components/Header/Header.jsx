
import React from 'react';

import "./Header.css"
const Header = ({ heading }) => {
    return (
        <div className='header-container'>
            <h1>{heading}</h1>
        </div>
    );
};


export default Header;