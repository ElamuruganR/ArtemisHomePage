import React from 'react';
import './slide.css';
import Image from '../../atoms/Image';
import SlideInfo from '../../molecules/slideinfo/SlideInfo';

export default function Slide({data}) {
    return (
        <a href="#" className="slide" key={data.id}>
            <SlideInfo data={data} />
            <div className="slide-image">
                <Image 
                    source={data.imgSrc}
                    altText={data.title}
                    className="carousel-img"
                />
            </div>
        </a>
    )
}