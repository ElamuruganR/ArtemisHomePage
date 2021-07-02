import React from 'react';
import './searchbar.css'
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Input from '../../atoms/Input';

export default function SearchBar(props) {
    return(
        <div className="search-bar">
            <Input 
                type="text"
                placeholder="Search for a show, episode, shorts etc."
                className="search-input" 
            />
            <Image
                source="/images/search-icon.png" 
                altText="search-icon-image"  
                className="search-icon"
            />
        </div>
    )
}