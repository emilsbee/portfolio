// External imports
import React from 'react';

// Internal imports
import "./home.css"
import AboutMe from "../AboutMe"
import ProjectSection from "../ProjectSection"

const Home = () => {
    return (
        <div id="home-container">
            <div id="home-inner-container">
                <AboutMe />
                <ProjectSection />
            </div>
        </div>
    );
}
 
export default Home;