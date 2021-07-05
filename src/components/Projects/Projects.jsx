import React from 'react';
import Header from '../Header/Header';
import { projectsData } from './../../images/ProjectData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='content'>
            <Header
                heading='My Projects.'
            
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Projects;