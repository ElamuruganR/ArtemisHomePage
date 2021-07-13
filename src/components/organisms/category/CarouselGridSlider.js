import React from 'react';
import './carouselslider.css';

const CarouselGridSlider = React.forwardRef( ({children}, ref) => {
    return (
        <div className="carousel-slider-container" ref={ref.carouselContainerRef}>
            <div className="carousel-slider" ref={ref.carouselSliderRef} >
                {children}
            </div>
        </div>
    )
})
export default CarouselGridSlider;