// External imports
import React from 'react';

// Internal imports
import Button from "../../BasicComponents/Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const BattleshipGame = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                Classic Battleship online terminal game 
            </div>

            <div className="project-details">
                The project consists of a front-end terminal user-interface and a simple socket server. 
                This project is from the second module of university Java programming course.
            </div>

            <div className="project-link-container">
                <a 
                        href="https://www.github.com/emilsbee/battleship-server" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                >
                        <Button text="Github server" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>
                <a 
                        href="https://www.github.com/emilsbee/battleship-client" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                >
                        <Button text="Github client" backgroundColor="rgb(31, 29, 26)" onClick={() => null}/>
                </a>
            </div>

            <TechStack>
                <Tech type="Java"/>
            </TechStack>
        </div>
    );
}
 
export default BattleshipGame;