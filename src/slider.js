
import { Avatar } from '@material-ui/core';
import React from 'react';

function Slider(){
    return (
      <div className="slider-container">
      <div
        className="slide active"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")`
        }}
      ></div>
      <div
        className="slide"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80")`
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")`
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80")`
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")`
        }}
      ></div>

      <button className="arrow left-arrow" id="left">
        <i className="fas fa-arrow-left"></i>
      </button>

      <button className="arrow right-arrow" id="right">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>

    );
};
export default Slider;