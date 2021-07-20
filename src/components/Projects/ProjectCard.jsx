import React from 'react';
import './Projects.css';

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
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <p className='project-heading'>{projectName}</p>
                <p className='project-details'>{projectDescription}</p>
                <a href={codeURl} className='project-code-link'>
                    Code in Github
                </a>
                <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;