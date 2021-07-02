import React from 'react';
import './cards.css';
import LeftArrow from '../../molecules/arrows/LeftArrow';
import RightArrow from '../../molecules/arrows/RightArrow';
import { cardsData as data } from '../../testdata/data';
import Image from '../../atoms/Image';

export default function Cards(){
    const arrowContainerStyle = {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    const handleRightClick = () => {
        let slider = document.querySelector(".cards-slider");
        slider.style.transform = "translate(-16.6%)";
    }
    const handleLeftClick = () => {
        let slider = document.querySelector(".cards-slider");
        slider.style.transform = "translate(0%)";
    }
    
    return(
        <div className="cards-wrapper">
            <div className="cards-container">
                <LeftArrow
                    containerStyle = {arrowContainerStyle}
                    handleClick = {handleLeftClick}
                />
                <div className="cards-carousel">
                    <div className="cards-slider">
                    {
                        data.map((card) => {
                            return (
                                <Image
                                    source={card.imgSrc}
                                    altText={card.alt}
                                    className="card-img"
                                />
                            )
                        })
                    }
                    </div>
                </div>
                <RightArrow 
                    containerStyle = {arrowContainerStyle}
                    handleClick = {handleRightClick}
                />
            </div>
        </div>
    )
}