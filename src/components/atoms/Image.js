import React from 'react';
import './image.css';
import '../molecules/logo/logo.css'
import '../organisms/carousel/carousel.css';

export default function Image({source, altText, className, style, handleClick}){
    return(
            <img 
                src= {source} 
                alt={altText}
                className={className}
                style= {style}
                onClick={handleClick} 
            />
    )
}