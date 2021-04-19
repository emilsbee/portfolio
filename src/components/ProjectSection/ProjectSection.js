// External imports
import React from 'react';

// Internal imports
import "./project-section.scss";
import ProjectContainer from "./ProjectContainer"
import RainbowTracker from "./RainbowTracker"
import MealPlanner from "./MealPlanner"
import BataApp from "./BataApp"
import CaishenBackend from "./CaishenBackend"
import CaishenMobile from "./CaishenMobile"
import BattleshipGame from "./BattleshipGame"
import Portfolio from "./Portfolio"

const ProjectSection = () => {
    return (
        <div id="project-section-container">
            <div id="project-section-title">
                Personal projects
            </div>
            <ProjectContainer>
                <RainbowTracker/>
            </ProjectContainer>
            <ProjectContainer>
                <CaishenBackend/>
            </ProjectContainer>
            <ProjectContainer>
                <CaishenMobile/>
            </ProjectContainer>
            <ProjectContainer>
                <BataApp/>
            </ProjectContainer>
            <ProjectContainer>
                <MealPlanner/>
            </ProjectContainer>
            <ProjectContainer>
                <BattleshipGame/>
            </ProjectContainer>
            <ProjectContainer>
                <Portfolio/>
            </ProjectContainer>
        </div>
    );
}
 
export default ProjectSection;