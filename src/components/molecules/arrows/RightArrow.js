import React from 'react';
import './arrow.css';
import Image from '../../atoms/Image';

export default function RightArrow({handleClick, style}) {
    return(
        <div className="arrow right">
            <Image 
                source="/images/carousel/next.png" 
                altText="next" 
                className="img-arrow"
                style={{style}}
                handleClick= {handleClick}
            />
        </div>
    )
}