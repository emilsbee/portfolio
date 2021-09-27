// External imports
import React from 'react';

// Internal imports
import styles from "../../../styles/Project.module.css"
import Button from "../../Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const MealPlanner = () => {
    return (
        <div className="project-container">
            <div className={styles.projectTitle}>
                Meal planner
            </div>

            <div className={styles.projectDetails}>
                This was the first “real” web application I created. The problem it solves for me is meal planning and recipe collecting. It offers a simple way to collect and create recipes to use for meal planning. Of course, it allows you to plan recipes for the week and go back through weeks to view what you ate in the weeks before. Also, allows for grocery list creation based on recipe ingredients.
            </div>

            <div className={styles.projectLinkContainer}>
                <a 
                        href="https://www.github.com/emilsbee/food-app" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>

                <a
                    href="https://food.emils.xyz/" 
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
 
export default MealPlanner;