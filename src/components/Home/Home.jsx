import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { saveAs } from "file-saver";
import linkedin from "./../../images/linkedin.png"
import github from "./../../images/github.png"
const Home = props => {
    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/18vLBnWJZKd5GDQyJfHchyrAlYR469VOR/view",
          "example.pdf"
        );
      };
    return (
        <div className="home-component">
           
            <div className='header-text'>
                <p>Hi,<br></br><br></br>I'm Anisha Shruti,</p>
                <p id="tag"> A Webdeveloper</p>
            </div>
            <div className='buttons'>
            <div className='head-btns'>
                    <Link to='/contact' className='btn'>
                        <p className='btn-text'>Contact Me!</p>
                    </Link>
            </div>
            <div className='head-btns'>
                    <p className='btn'>
                        <p className='btn-text' onClick={saveFile}>Download Resume</p>
                    </p>
                </div>
                </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/anisha-shruti-a-t-72a409202/"><img  className="Image-linkedin" src={linkedin} alt="linkedin"></img></a>
                <a href="https://github.com/anishashruti"><img className="Image-github" src={github} alt="github"></img></a>
                
            </div>
        </div>
    );
};

export default Home;