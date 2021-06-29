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
                <img id="self-image" src={SelfImage} alt=""/>

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
                <div style={{marginTop: 10}}>
                    Want to get in touch? Here's a few ways
                </div>
                <div id="links-container-links">
                    <a 
                        href="https://www.linkedin.com/in/em%C4%ABls-bernhards-15a47614a/?originalSubdomain=nl" 
                        target="_blank"
                        id="links-container-link"
                        rel="noreferrer noopener"
                    >
                        <Button text="LinkedIn" backgroundColor="rgb(40, 102, 188)" onClick={() => null} styles={{marginLeft: 0}}/>
                    </a>

                    <div id="links-container-link">
                        <Button 
                            styles={{marginLeft: 0}}
                            text="Email" 
                            backgroundColor="rgb(139, 136, 130)" 
                            onClick={() => window.open('mailto:bernhardsemils@gmail.com?subject=Subject&body=Body')}
                        />
                    </div>

                    <a 
                        href="https://www.github.com/emilsbee" 
                        target="_blank"
                        id="links-container-link"
                        rel="noreferrer noopener"
                    >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;