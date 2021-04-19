// External imports
import React from 'react';

// Internal imports
import "./tech-stack.scss"

const TechStack = (props) => {
    
    return (
        <div id="tech-stack-container">
            <div id="tech-stack-title">
                Tech stack
            </div>
            
            <div id="tech-stack-list">
                {props.children}
            </div>
        </div>
    );
}
 
export default TechStack;