import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Story.css";

function Story({image, profielSrc, title }) {
    return (
        <div style={ {backgroundImage: `url(${image})`} } className="story">
           <Avatar src={profielSrc}/> 
           <h4>{title}</h4>
        </div>
    );
}

export default Story
