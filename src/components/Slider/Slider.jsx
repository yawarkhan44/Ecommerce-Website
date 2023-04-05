import React, { useState } from 'react'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"

const data = [
    "https://images.pexels.com/photos/5119417/pexels-photo-5119417.jpeg?cs=srgb&dl=pexels-cottonbro-studio-5119417.jpg&fm=jpg&w=5731&h=3821&_gl=1*uvwy1e*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDY1NDI1MS4xLjEuMTY4MDY1Njg0Ni4wLjAuMA..",
    "https://images.pexels.com/photos/5120185/pexels-photo-5120185.jpeg?cs=srgb&dl=pexels-cottonbro-studio-5120185.jpg&fm=jpg&w=6068&h=4045&_gl=1*s4q7xs*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDY1NDI1MS4xLjEuMTY4MDY1NjgwNy4wLjAuMA..",
    "https://images.pexels.com/photos/5119526/pexels-photo-5119526.jpeg?cs=srgb&dl=pexels-cottonbro-studio-5119526.jpg&fm=jpg&w=6720&h=4480&_gl=1*ahrs3h*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDY1NDI1MS4xLjEuMTY4MDY1NjY5OC4wLjAuMA.."
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };

    return (
        <div className="slider">
          <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
          </div>
          <div className="icons">
            <div className="iconX" onClick={prevSlide}>
              <KeyboardArrowLeftOutlinedIcon />
            </div>
            <div className="iconX" onClick={nextSlide}>
              <KeyboardArrowRightOutlinedIcon />
            </div>
          </div>
        </div>
      );
    };
    
    export default Slider;