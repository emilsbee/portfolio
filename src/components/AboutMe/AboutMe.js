// External imports
import React from 'react';

// Internal imports
import "./about-me.scss"
import SelfImage from "./EMILS_0263.jpg"
import Button from "../BasicComponents/Button"

const AboutMe = () => {
    return (
        <div>
            <div id="about-me-container">
                <img id="self-image" src={SelfImage} alt="Image of me"/>

                <div id="about-me-description">
                    <div id="about-me-description-title">
                        Hey, I'm Emīls Bernhards!
                    </div>
                    <div id="about-me-description-details">
                        I currently study Business Information Technology at University of Twente. I'm interested in all things software, but mostly work with web related technologies. 
                    </div>
                </div>

            </div>

            <div id="links-container">
                Want to get in touch? Here's a few ways
                <a 
                    href="https://www.linkedin.com/in/em%C4%ABls-bernhards-15a47614a/?originalSubdomain=nl" 
                    target="_blank"
                    style={{textDecoration:"none"}}
                >
                    <Button text="LinkedIn" backgroundColor="rgb(40, 102, 188)" onClick={() => null}/>
                </a>

                <Button text="Email" backgroundColor="rgb(139, 136, 130)" onClick={() => window.open('mailto:bernhardsemils@gmail.com?subject=Subject&body=Body')}/>

                <a 
                    href="https://www.github.com/emilsbee" 
                    target="_blank"
                    style={{textDecoration:"none"}}
                >
                    <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null}/>
                </a>
            </div>
        </div>
    );
}
 
export default AboutMe;