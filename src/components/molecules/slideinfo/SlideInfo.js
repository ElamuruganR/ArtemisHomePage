import React from 'react';
import './slideinfo.css';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';

export default function SlideInfo({data}) {
    return (
        <div className="slide-details">
            <div className="title">{data.title}</div>
            <div className="info">{data.info}</div>
            <div className="btns">
                <Button>{data.btn1}</Button>
                <Button>{data.btn2}</Button>
            </div>
            <div className="play-btn">
                <Image source="/images/carousel/play-button.png" altText="play-btn" className="play-btn-img" />
                <div className="text">Play</div>
            </div>
        </div>
    )
}