// External imports
import React from 'react';

// Internal imports
import "./button.scss";

const Button = ({text, onClick, backgroundColor, styles}) => {

    return (
        <div id="custom-button" onClick={onClick} style={{backgroundColor, ...styles}}>
            {text}
        </div>
    );
}
 
export default Button;