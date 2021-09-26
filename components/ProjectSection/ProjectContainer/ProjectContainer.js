// External imports
import React from 'react';

const ProjectContainer = (props) => {

    return (
        <div style={{
            marginTop: "30px",
            borderBottom: "2px lightgray solid",
            paddingBottom: "30px"
        }}>
            {props.children}
        </div>
    );
}
 
export default ProjectContainer;