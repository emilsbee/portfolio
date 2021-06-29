// External imports
import React from 'react';

// Internal imports
import "./rainbow-tracker.scss"
import Button from "../../BasicComponents/Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const RainbowTracker = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                Rainbow productivity tracker
            </div>

            <div className="project-details">
                This is a productivity tracker web app I built specifically for my brother, Tom. The idea behind it is pretty simple, each day is divided in 15 minute intervals.
                Each interval is represented by a category and a specific activity from that category. A category for example could be "leisure" and its set of activities "reading", "cooking" and "video games".
                The rainbow aspect comes from the fact that within the app, a category is represented by a colored box and an activity is on the right side of the category, and is represented by a one or two letter acronym. 
                To learn more about the app and what it can do, you can check out both the live version of it and the Github repository.
            </div>

            <div className="project-link-container">
                <a 
                        href="https://www.github.com/emilsbee/rainbow-tracker" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>

                <a
                    href="https://rainbow.emils.xyz/" 
                    target="_blank"
                    style={{textDecoration:"none"}}
                    rel="noreferrer noopener"
                >
                    <Button text="Live demo" backgroundColor="rgb(31, 29, 26)"/>
                </a>
            </div>

            <TechStack>
                <Tech type="React"/>
                <Tech type="Firebase"/>
                <Tech type="EasyPeasy"/>
                <Tech type="Sass"/>
            </TechStack>
        </div>
    );
}
 
export default RainbowTracker;