// External imports
import React from 'react';

// Internal imports
import Button from "../../BasicComponents/Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const MealPlanner = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                Meal planner
            </div>

            <div className="project-details">
                Simple way to collect and create recipes to use for meal planning. Allows for grocery list creation based
                on recipe ingredients.
            </div>

            <div className="project-link-container">
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