// External imports
import React from 'react';

// Internal imports
import cssStyles from "../../styles/Button.module.css";

const Button = ({text, onClick, backgroundColor, styles}) => {

    return (
        <div className={cssStyles.customButton} onClick={onClick} style={{backgroundColor, ...styles}}>
            {text}
        </div>
    );
}
 
export default Button;