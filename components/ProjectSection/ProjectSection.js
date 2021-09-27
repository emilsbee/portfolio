// External imports
import React from 'react';

// Internal imports
import styles from "../../styles/ProjectSection.module.css";
import ProjectContainer from "./ProjectContainer"
import RainbowTracker from "./RainbowTracker"
import MealPlanner from "./MealPlanner"
import BataApp from "./BataApp"
import Caishen from "./Caishen"
import BattleshipGame from "./BattleshipGame"
import Portfolio from "./Portfolio"

const ProjectSection = () => {
    return (
        <div className={styles.projectSectionContainer}>
            <div className={styles.projectSectionTitle}>
                Personal projects
            </div>

            <ProjectContainer>
                <RainbowTracker/>
            </ProjectContainer>

            <ProjectContainer>
                <BataApp/>
            </ProjectContainer>

            <ProjectContainer>
                <Caishen/>
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