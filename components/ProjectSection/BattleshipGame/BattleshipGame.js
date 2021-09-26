// External imports
import React from 'react';

// Internal imports
import styles from "../../../styles/Project.module.css"
import Button from "../../Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const BattleshipGame = () => {
    return (
        <div className="project-container">
            <div className={styles.projectTitle}>
                Classic Battleship online terminal game 
            </div>

            <div className={styles.projectDetails}>
                The project consists of a front-end terminal user-interface and a simple socket server. 
                This project is from the second module of university Java programming course.
            </div>

            <div className={styles.projectLinkContainer}>
                <a 
                        href="https://www.github.com/emilsbee/battleship-server" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github server" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>
                <a 
                        href="https://www.github.com/emilsbee/battleship-client" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
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