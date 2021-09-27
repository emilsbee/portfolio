// External imports
import React from 'react';

// Internal imports
import styles from "../../../styles/Project.module.css"
import Button from "../../Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const BataApp = () => {
    return (
        <div className="project-container">
            <div className={styles.projectTitle}>
                Batavierenrace participant mobile application
            </div>

            <div className={styles.projectDetails}>
                {"Mobile application I built in the first module of the university for the Batavierenrace organization. Batavierenrace is a relay race for students in the Twente region of the Netherlands. The app allows participants to explore routes they have to run, chat with Batavierenrace support staff, and use a fun little bonus feature which is a reminder that sends notifications to remind the runner to drink some water. Download the APK file to explore the app more. In the login screen use email \"emils@gmail.com\" and password \"123456\"."}
            </div>

            <div className={styles.projectLinkContainer}>
                <a 
                        href="https://www.github.com/emilsbee/Bata" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>

                <a
                    href="https://drive.google.com/drive/folders/1RC0dWO4OkR4glpHNOnT0QHIX06ISoKG9?usp=sharing" 
                    target="_blank"
                    style={{textDecoration:"none"}}
                    rel="noreferrer noopener"
                >
                    <Button text="Download apk" backgroundColor="rgb(31, 29, 26)"/>
                </a>
            </div>

            <TechStack>
                <Tech type="ReactNative"/>
                <Tech type="Firebase"/>
                <Tech type="EasyPeasy"/>
            </TechStack>
        </div>
    );
}
 
export default BataApp;