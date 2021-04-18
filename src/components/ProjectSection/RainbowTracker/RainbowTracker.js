// External imports
import React from 'react';

// Internal imports
import "./rainbow-tracker.scss"
import Button from "../../BasicComponents/Button"

const RainbowTracker = () => {
    return (
        <div id="rainbow-tracker-container">
            <div id="rainbow-tracker-title">
                Rainbow tracker
            </div>

            <div id="rainbow-tracker-details">
                This is a productivity tracker web app I built specificially for my brother, Tom. The idea behind it is pretty simple, each day is divided in 15 minute intervals.
                Each interval is represented by a category and a specific activity from that category. A category for example could be "leisure" and its set of activites "reading", "cooking" and "video games". 
                Within the app, a category is represented by a colored box and an activity is on the right side of the category, and is represented by a one or two letter acronym. 
                To learn more about the app and what it can do, you can check out both the live version of it and the Github repository.
            </div>

            <div id="rainbow-tracker-link-container">
                <a 
                        href="https://www.github.com/emilsbee/rainbow-tracker" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                    >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>

                <a
                    href="https://rainbow.emils.xyz/" 
                    target="_blank"
                    style={{textDecoration:"none"}}
                >
                    <Button text="Live demo" backgroundColor="rgb(31, 29, 26)"/>
                </a>
            </div>
        </div>
    );
}
 
export default RainbowTracker;