// External imports
import React from 'react';

// Internal imports
import Button from "../../BasicComponents/Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const Portfolio = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                Portfolio website
            </div>

            <div className="project-details">
                Yes, you guessed it, it's the same website you're viewing right now. It's a collection of the various
                bits of programming I've done throughout time. 
            </div>

            <div className="project-link-container">
                <a 
                        href="https://www.github.com/emilsbee/Portfolio" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>
            </div>

            <TechStack>
                <Tech type="React"/>
                <Tech type="Sass"/>
            </TechStack>
        </div>
    );
}
 
export default Portfolio;