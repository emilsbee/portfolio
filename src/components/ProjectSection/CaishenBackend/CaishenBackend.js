// External imports
import React from 'react';

// Internal imports
import Button from "../../BasicComponents/Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const CaishenBackend = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                Caishen personal finance management API
            </div>

            <div className="project-details">
                API for the Caishen personal finance management front-end applications. Allows for the classic 
                features of a personal finance app, that is managing accounts, payments, etc. Includes an extra 
                awesome feature which is the syncing of payments with your actual bank accounts. The API fetches all 
                latest payments and all you have to do is categorize them within one of the apps.
            </div>

            <div className="project-link-container">
                <a 
                        href="https://www.github.com/emilsbee/caishen" 
                        target="_blank"
                        style={{textDecoration:"none"}}
                        rel="noreferrer noopener"
                >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null} styles={{marginLeft: 0}}/>
                </a>
            </div>

            <TechStack>
                <Tech type="Node"/>
                <Tech type="SQLite3"/>
                <Tech type="TypeORM"/>
                <Tech type="Typescript"/>
            </TechStack>
        </div>
    );
}
 
export default CaishenBackend;