// External imports
import React from 'react';

// Internal imports
import styles from "../../../styles/TechStack.module.css"

const TechStack = (props) => {
    
    return (
        <div className={styles.techStackContainer}>
            <div className={styles.techStackTitle}>
                Tech stack
            </div>
            
            <div className={styles.techStackList}>
                {props.children}
            </div>
        </div>
    );
}
 
export default TechStack;