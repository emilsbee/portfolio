// External imports
import React from 'react';

// Internal imports
import Button from "../../BasicComponents/Button"
import Tech from "../TechStack/Tech"
import TechStack from "../TechStack"

const CaishenMobile = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                Caishen personal finance management mobile application
            </div>

            <div className="project-details">
                Caishen mobile application both for Android and IOS that makes use of the Caishen API. 
            </div>

            <div className="project-link-container">
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