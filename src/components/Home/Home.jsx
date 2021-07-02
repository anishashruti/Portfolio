import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = props => {
    return (
        <div className="home-component">
           
            <div className='header-text'>
                <p>Hi,<br></br><br></br>I'm Anisha Shruti,</p>
                <p id="tag"> A Webdeveloper</p>
            </div>
            <div className='head-btns'>
                    <Link to='/contact' className='btn'>
                        <p className='btn-text'>Contact Me!</p>
                    </Link>
            </div>
        </div>
    );
};

export default Home;