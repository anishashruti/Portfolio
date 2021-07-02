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
                He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. 
                    <br></br>
                    <br></br>
                There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. 
                </div>
                <div className="about-right">
                <img className="Image-about" src={about} alt="about-anisha"></img>
                </div>
                
            </div>
        </div>
    );
};

export default About;