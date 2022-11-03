
import { Avatar } from '@material-ui/core';
import React from 'react';

function Slider(){
    return (
      <div className="container">

        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img  src="./images/aaa.jpg" alt='' /></div>
            <div className="swiper-slide"><img  src="./images/ddd.jpg" alt='' /></div>
            <div className="swiper-slide"><img  src="./images/bbb.jpg" alt='' /></div>
            <div className="swiper-slide"><img  src="./images/ccc.jpg" alt='' /></div>

          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

      </div>

    );
};
export default Slider;