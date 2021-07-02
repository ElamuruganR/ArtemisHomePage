import React, { useEffect, useLayoutEffect, useState } from 'react';
import './carousel.css';
import {carouselData as data} from '../../testdata/data.js';
import Slide from './Slide';
import LeftArrow from '../../molecules/arrows/LeftArrow';
import RightArrow from '../../molecules/arrows/RightArrow';

export default function Carousel(){
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const slider = document.querySelector(".slider");
    const carousel = document.querySelector('.carousel-container');

    const handleLeftClick = () => {
        if(direction === -1) {
            slider.appendChild(slider.firstElementChild);
        }

        setDirection(1);
        carousel.style.justifyContent = "flex-end";
        index===0 ? setIndex(3) : setIndex(prevIndex => prevIndex-1);
    }

    const handleRightClick = () => {
        if(direction === 1) {
            slider.prepend(slider.lastElementChild);
        }

        setDirection(-1);
        carousel.style.justifyContent = "flex-start";
        index===3 ? setIndex(0) : setIndex(prevIndex => prevIndex+1);
    }

    const handleIndicators = (ind) => {
        updateIndicators(ind);
        setIndex(ind);
    }

    const updateIndicators = (ind) => {
        document.querySelector(".controls ul li.selected").classList.remove("selected");
        document.querySelector(`.controls ul li.ind${ind}`).classList.add("selected");
    }

    const handleTransitionEnd = () => {
        if(direction === -1) {
            slider.appendChild(slider.firstElementChild);
        } else if(direction === 1) {
            slider.prepend(slider.lastElementChild);
        }
        slider.style.transition = 'none';
        slider.style.transform = "translate(0)";
        setTimeout(()=>{
            slider.style.transition = 'all 0.5s';
        })
    }

    useEffect(() => {
        if(!isMounted){
            setIsMounted(true);
            return;
        }
        slider.style.transform = `translate(${direction===-1 ? -25 : 25}%)`;
        updateIndicators(index);
    }, [index])
    
    useEffect(()=>{
        //AutoSlide
        let autoSlide = setTimeout(()=>{handleRightClick()}, 3000);
        return ()=>clearTimeout(autoSlide);
    })

    return(
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <div className="slider" onTransitionEnd={handleTransitionEnd} >
                    {
                        data.map((slideData)=>{
                            console.log(slideData.title);
                            return (
                                <Slide data={slideData}/>
                            )
                        })
                    }
                </div>
                <div className="controls">
                    <LeftArrow 
                        handleClick={handleLeftClick}
                    />
                    <RightArrow 
                        handleClick={handleRightClick}
                    />
                    <ul>
                        {data.map((slideData, i)=>{
                           return <li className={i===0 ?`ind${i} selected` : `ind${i}`} onClick={()=>handleIndicators(i)}></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}