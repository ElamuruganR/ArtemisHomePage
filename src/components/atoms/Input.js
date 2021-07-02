import React from 'react';
import './input.css';

export default function Input({type, placeholder, className}){
    return(
        <input 
            type={type}
            placeholder={placeholder}
            className={className}    
        />
    )
}