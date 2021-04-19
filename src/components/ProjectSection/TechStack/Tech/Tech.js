// External imports
import React from 'react';

// Internal imports
import "./tech.scss"
import Button from "../../../BasicComponents/Button"
import {getTypeData} from "./helpers"

const Tech = ({type}) => {

    return (
        <a 
            href={getTypeData(type).link}
            target="_blank"
            style={{textDecoration:"none"}}
        >
        <Button 
            text={getTypeData(type).text} 
            onClick={() => null} 
            backgroundColor={getTypeData(type).backgroundColor}
            styles={{marginLeft: 0, marginRight: 10}}
        />
        </a>
    );
}
 
export default Tech;