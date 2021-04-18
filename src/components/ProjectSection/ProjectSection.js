// External imports
import React from 'react';

// Internal imports
import "./project-section.scss";
import ProjectContainer from "./ProjectContainer"
import RainbowTracker from "./RainbowTracker"

const ProjectSection = () => {
    return (
        <div id="project-section-container">
            <div id="project-section-title">
                Personal projects
            </div>
            <ProjectContainer>
                <RainbowTracker />
            </ProjectContainer>
        </div>
    );
}
 
export default ProjectSection;