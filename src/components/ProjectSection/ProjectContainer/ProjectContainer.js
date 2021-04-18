// External imports
import React from 'react';

// Internal imports
import "./project-container.css";

const ProjectContainer = (props) => {

    return (
        <div id="project-container">
            {props.children}
        </div>
    );
}
 
export default ProjectContainer;