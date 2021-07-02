import React from 'react';
import './arrow.css';
import Image from '../../atoms/Image';

export default function LeftArrow({handleClick, containerStyle, imgStyle}) {
    return(
        <div className="arrow left" style={containerStyle}>
            <Image 
                source="/images/carousel/previous.png" 
                altText="prev" 
                className="img-arrow"
                style={{imgStyle}}
                handleClick= {handleClick}
            />
        </div>
    )
}