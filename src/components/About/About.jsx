import React from 'react';
import Header from '../Header/Header';

import about from "./../../images/about-page.gif"
import "./About.css"
const About = props => {
    return (
        <div className="content">
            <Header
                heading='My,Myself & I'
            />
            <div className="about-content">
                <div className="about-left">
                    I’m a Web Developer from India.<br></br>
                    I have a great passion for webdevelopment.
                    Apart from these I love to Sketch,Paint,Bake and make DIY's Art&Crafts from waste.
                    <br></br>
                    <br></br>
                It's my ambition to create a well scallable websites with high clarity and availability for users.
                </div>
                <div className="about-right">
                <img className="Image-about" src={about} alt="about-anisha"></img>
                </div>
                
            </div>
        </div>
    );
};

export default About;