import React, { useEffect, useRef, useState } from 'react';
import './carouselgrid.css'; 
import LeftArrow from '../../molecules/arrows/LeftArrow';
import RightArrow from '../../molecules/arrows/RightArrow';
import CarouselGridSlider from './CarouselGridSlider';

export function CarouselGrid({children}) {
    const [isMounted, setIsMounted] = useState(false);
    const [slide, setSlide] = useState(0);
    const carouselContainerRef = useRef();
    const carouselSliderRef = useRef();

    const handleRightClick = () => {
        let carouselWidth = carouselContainerRef.current.getBoundingClientRect().width;
        let sliderWidth = carouselSliderRef.current.getBoundingClientRect().width;
        let overflowWidth = sliderWidth-((slide+1)*carouselWidth);
        console.log("handleRightClick-overflowWidth:", overflowWidth);
        if(overflowWidth > 0) setSlide(prevSlide => prevSlide+1);
    }
    const handleLeftClick = () => {
        if(slide > 0) 
        setSlide(prevSlide => prevSlide-1);
    }
    useEffect(()=>{
        if(!isMounted) {
            setIsMounted(true);
            return;
        }
            let slider = document.querySelector(".carousel-slider");
            let carouselWidth = carouselContainerRef.current.getBoundingClientRect().width;
            let sliderWidth = carouselSliderRef.current.getBoundingClientRect().width;
            let overflowWidth = sliderWidth-((slide)*carouselWidth);
            let translate;
            if(overflowWidth > carouselWidth){
                translate = slide*carouselWidth;
            } else {
                translate = ((slide-1)*carouselWidth)+overflowWidth;
            }
            slider.style.transform = `translate(${-translate}px)`;
    }, [slide])
    return (
        <div className="category-carousel-container">
            <div className="carousel-area">
                <LeftArrow handleClick={handleLeftClick} containerStyle={{position:"relative"}}/>
                <CarouselGridSlider ref={{carouselContainerRef, carouselSliderRef}}>{children}</CarouselGridSlider>
                <RightArrow handleClick={handleRightClick} containerStyle={{position:"relative", left:"13px"}}/>
            </div>
        </div>
    )
}