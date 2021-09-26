// External imports
import React from 'react';

// Internal imports
import styles from "../../../styles/Project.module.css"
import Button from "../../Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const CaishenMobile = () => {
    return (
        <div className="project-container">
            <div className={styles.projectTitle}>
                Caishen personal finance management mobile application
            </div>

            <div className={styles.projectDetails}>
                Caishen mobile application both for Android and IOS that makes use of the Caishen API. 
            </div>

            <div className={styles.projectLinkContainer}>
                <a 
                        href="https://www.github.com/emilsbee/CaishenMobile" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>
            </div>

            <TechStack>
                <Tech type="ReactNative"/>
                <Tech type="EasyPeasy"/>
                <Tech type="Typescript"/>
            </TechStack>
        </div>
    );
}
 
export default CaishenMobile;