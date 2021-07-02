import React from 'react';
import './logo.css';
import Image from '../../atoms/Image';

export default function Logo(){
    return(
        <div className="logo">
            <Image 
                source="/images/menu.jpg" 
                altText="hamburger"
                className="menu-icon" />
            <Image 
                source="/images/discovery-logo.png" 
                altText="discovery-plus-logo" 
                className="discovery-logo"
             />
        </div>
    )
}