import React from 'react';
import './arrow.css';
import Image from '../../atoms/Image';

export default function RightArrow({handleClick, containerStyle, imgStyle}) {
    return(
        <div className="arrow right" style={containerStyle}>
            <Image 
                source="/images/carousel/next.png" 
                altText="next" 
                className="img-arrow"
                style={imgStyle}
                handleClick= {handleClick}
            />
        </div>
    )
}