import React from 'react';
import './Projects.css';
import youtube from './../../images/youtube.png';
import github from './../../images/github.png';
import deploy from './../../images/deploy.png';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
    codeURl
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
               
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <p className='project-heading'>{projectName}</p>
                <p className='project-details'>{projectDescription}</p>
                <div className='infos'>
                    <div className='twologo'>
                        <div className='logos-div'>
                            
                            <a href={codeURl}>
                            <img id="codelogo" src={github} alt="youtube"></img>
                            </a>
                        </div>
                        <div className='logos-div'>
                            
                            <a href={videoUrl}>
                            <img id="codelogo" src={youtube} alt="youtube"></img>
                            </a>
                        </div>
                    </div>
                    <div >
                        
                        <a href={projectUrl} className='project-external-link'>
                        <img id="codelogo" src={deploy} alt="deploy-link"></img>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ProjectCard;