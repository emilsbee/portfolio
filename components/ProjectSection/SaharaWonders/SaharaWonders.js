// External imports
import React from "react"

// Internal imports
import styles from "../../../styles/Project.module.css"
import Button from "../../Button";
import TechStack from "../TechStack";
import Tech from "../TechStack/Tech";

const SaharaWonders = () => {
    return (
        <div className="project-container">
            <div className={styles.projectTitle}>
                Sahara Wonders
            </div>

            <div className={styles.projectDetails}>
                Informative website for Aziz who does tours, hosts and lives in the Sahara desert. The site has a lot of information and pictures about what Aziz offers. It also has a blog which includes posts from previous travelers describing their experience.
            </div>

            <div className={styles.projectLinkContainer}>
                <a
                    href="https://saharawonders.com/"
                    target="_blank"
                    style={{textDecoration:"none"}}
                    rel="noreferrer noopener"
                >
                    <Button text="Live site" backgroundColor="rgb(31, 29, 26)" styles={{marginLeft: 0}}/>
                </a>
            </div>

            <TechStack>
                <Tech type="React"/>
                <Tech type="Sass"/>
            </TechStack>
        </div>
    )
}


export default SaharaWonders

