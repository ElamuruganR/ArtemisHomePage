import React, { useEffect, useLayoutEffect, useState } from 'react';
import './carousel.css';
import {carouselData as data} from '../../testdata/data.js';
import Slide from './Slide';
import LeftArrow from '../../molecules/arrows/LeftArrow';
import RightArrow from '../../molecules/arrows/RightArrow';

export default function Carousel(){
    const [index, setIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [prevRotate, setPrevRotate] = useState(false);
    const [nextRotate, setNextRotate] = useState(false);
    
    const slider = document.querySelector(".slider");

    const handleLeftClick = () => {
        console.log("handleLeftClick");

        if(index===0) {
            setPrevRotate(true);
            setIndex(3);
        } else {
            setIndex(prevIndex => prevIndex-1);
        }
    }

    const handleRightClick = () => {
        console.log("handleRightClick");

        if(index===3) {
            setNextRotate(true);
            setIndex(0);
        } else {
            setIndex(prevIndex => prevIndex+1);
        }
    }

    const handleIndicators = (ind) => {
        console.log("handleIndicators");
        updateIndicators(ind);
        setIndex(ind);
    }

    const updateIndicators = (ind) => {
        console.log("updateIndicators");
        document.querySelector(".controls ul li.selected").classList.remove("selected");
        document.querySelector(`.controls ul li.ind${ind}`).classList.add("selected");
    }

    useEffect(() => {
        if(!isMounted){
            setIsMounted(true);
            return;
        }
        let translate = index*25;
        if(nextRotate || prevRotate) {
            let imgSlide = document.querySelectorAll(".slide")[index];
            slider.style.transition = "none";
            imgSlide.style.transition = "none";
            slider.style.transform = `translate(-${translate}%)`;
            translate = nextRotate ? 100 : -100;
            console.log("transform2:", translate, imgSlide);
            imgSlide.style.transform = `translate(${translate}%)`;

            const timeout = setTimeout(()=>{
                imgSlide.style.transform = `translate(0%)`;
                imgSlide.style.transition = "all 0.2s";
                slider.style.transition = "all 0.3s";
                setPrevRotate(false);
                setNextRotate(false);
            })
            updateIndicators(index);

            return ()=>{
                clearTimeout(timeout);
            };

        } else {
            slider.style.transform = `translate(-${translate}%)`;
            updateIndicators(index);
        }

    }, [index])
    
    useEffect(()=>{
        //AutoSlide
        // let autoSlide = setTimeout(()=>{handleRightClick()}, 3000);
        // return ()=>clearTimeout(autoSlide);
    })

    return(
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <div className="slider">
                    {
                        data.map((slideData)=>{
                            return (
                                <Slide data={slideData}/>
                            )
                        })
                    }
                </div>
                <div className="controls">
                    <LeftArrow 
                        handleClick={handleLeftClick}
                        containerStyle={{left:"10px"}}
                    />
                    <RightArrow 
                        handleClick={handleRightClick}
                        containerStyle={{right:"10px"}}
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