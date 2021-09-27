// External imports
import React from 'react';

// Internal imports
import styles from "../../../styles/Project.module.css"
import Button from "../../Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const RainbowTracker = () => {
    return (
        <div className="project-container">
            <div className={styles.projectTitle}>
                Rainbow tracker
            </div>

            <div className={styles.projectDetails}>
                {"Rainbow tracker is a personal time tracker web application. It facilitates tracking your life in 15-minute intervals using user-defined categories and activities. You can also write notes next to the categories/activities to further elaborate on what you were doing at that point. With convenient dragging functionality for categories/activities and notes, logging your time becomes super easy. Furthermore, there is an extensive analytics page to view the various statistics of how you have spent your time. And of course, you can edit the categories and activities to fit what exactly you spend time on."}
            </div>

            <div className={styles.projectLinkContainer}>
                <a 
                        href="https://www.github.com/emilsbee/rainbow-tracker" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github frontend" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>

                <a
                    href="https://www.github.com/emilsbee/rainbow-tracker-backend"
                    target="_blank"
                    style={{textDecoration:"none"}}
                    rel="noreferrer noopener"
                >
                    <Button text="Github backend" backgroundColor="rgb(31, 29, 26)" onClick={() => null}/>
                </a>

                <a
                    href="https://rainbow.emils.xyz/" 
                    target="_blank"
                    style={{textDecoration:"none"}}
                    rel="noreferrer noopener"
                >
                    <Button text="Live site" backgroundColor="rgb(31, 29, 26)"/>
                </a>
            </div>

            <TechStack>
                <Tech type="React"/>
                <Tech type="Koa"/>
                <Tech type="Typescript"/>
                <Tech type="Sass"/>
                <Tech type="Postgres"/>
                <Tech type="Redis"/>
            </TechStack>
        </div>
    );
}
 
export default RainbowTracker;