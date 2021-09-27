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
                Caishen
            </div>

            <div className={styles.projectDetails}>
                Caishen is a personal finance management application. It allows for the classic features of a personal finance app, that is managing accounts, categorizing payments, etc. Includes an extra awesome feature which is the syncing of payments with your actual bank accounts. Then, you can categorize these payments within the app. This application was my first introduction to Typescript and ever since I have fallen in love with it.
            </div>

            <div className={styles.projectLinkContainer}>
                <a 
                        href="https://www.github.com/emilsbee/CaishenMobile" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github mobile app" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>

                <a
                    href="https://github.com/emilsbee/caishen"
                    target="_blank"
                    style={{textDecoration:"none"}}
                    rel="noreferrer noopener"
                >
                    <Button text="Github backend" backgroundColor="rgb(31, 29, 26)" onClick={() => null} />
                </a>
            </div>

            <TechStack>
                <Tech type="ReactNative"/>
                <Tech type="EasyPeasy"/>
                <Tech type="Typescript"/>
                <Tech type="Node"/>
                <Tech type="SQLite3"/>
                <Tech type="TypeORM"/>
            </TechStack>
        </div>
    );
}
 
export default CaishenMobile;