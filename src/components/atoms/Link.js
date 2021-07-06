import React from 'react';
import './link.css';

export default function Link(props) {
    return(
        <a href="#" 
           className = {props.className}
        >
            {props.children}
        </a>
    )
}