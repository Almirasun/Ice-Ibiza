import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import card1 from "./images/card-1.jpg";
import card2 from "./images/card-2.jpg";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="carousel-section">
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
            {[1,2,3,4,5,6,7,8].map((item, index) => {
                return (
                    <div className="card" key={index}>
                        {item}
                    </div>
                )
            })}

          {/* <div className="card">
            <img src={card1} alt="" />
          </div>
          <div className="card">
          <img src={card2} alt="" />
          </div>
          <div className="card">
            <h3>3</h3>
          </div>
          <div className="card">
            <h3>4</h3>
          </div>
          <div className="card">
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}