import React from "react";
import Bue from "../images/Bue.jpg";
import British from "../images/British.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="clearfix">
        <Slider {...settings}>
          <div>
            <img src={Bue} className="responsive" style={{
              backgroundPosition: 'center',/* Center the image */
              backgroundRepeat: 'no-repeat', /* Do not repeat the image */
              backgroundSize: 'cover'
            }} />
          </div>
          <div>
            <img src={British} className="responsive" style={{
              backgroundPosition: 'center',/* Center the image */
              backgroundRepeat: 'no-repeat', /* Do not repeat the image */
              backgroundSize: 'cover'
            }} />
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Header;
