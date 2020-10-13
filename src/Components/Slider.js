import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import news from '../Assets/images/news.jpeg'
import cover from '../Assets/images/mecover.png'
import './Slider.css'
export default function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div style={{padding : '3%'}}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
           
            className="d-block w-100"
            className='img-slider-height'
             src={news}
             alt="First "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
           height="350px"
            className="d-block w-100"
            className='img-slider-height'
            src={cover}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Live-Session</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  