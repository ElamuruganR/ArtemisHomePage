import React from 'react';
import './navlinks.css'
import Link from '../../atoms/Link';

export default function NavLinks(){
    return(
        <ul className="navlinks">
            <li><Link className="navlink">Home</Link></li>
            <li><Link className="navlink">Explore</Link></li>
            <li><Link className="navlink">Kids</Link></li>
            <li><Link className="navlink">Shorts</Link></li>
            <li><Link className="navlink">Mindblown</Link></li>
            <li><Link className="navlink">Premium</Link></li>
        </ul>
    )
}