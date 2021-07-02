import React from 'react';
import './link.css';
import '../molecules/navlinks/navlinks.css';

export default function Link(props) {
    return(
        <a href="#" 
           className = {props.className}
        >
            {props.children}
        </a>
    )
}