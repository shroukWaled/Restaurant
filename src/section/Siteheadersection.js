import React, { useState } from 'react';
import { Link } from 'react-router';
import "../style/Siteheader.css";
import spoon from "../style/assets/spoon.png";
import foodImage1 from "../style/assets/welcome.png";
import foodImage2 from "../style/assets/findus.png"; 
import foodImage3 from "../style/assets/gallery01.png";
import foodImage4 from "../style/assets/gallery03.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Siteheadersection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Content for each slide
  const slides = [
    {
      title: "The key to Fine dining",
      description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.",
    
      image: foodImage1,
    },
    {
      title: "Reserve your table today",
      description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.",
    
       image: foodImage2,
    },{
      title: "Love the original Taste",
      description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.",
    
      image: foodImage3,
    },{
      title: "Food that surprise you",
      description:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.",
    
      image: foodImage4,
    }
  ];

  const handleSlideChange = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else if (direction === "next") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className='siteheader'>
      <div className='sitecontainer'>
        <div className='left-part'>
          <p>Chase the new Flavour</p>
          <img src={spoon} alt="spoon" />
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
         <Link to="/"> <button>
            Explore Menu <FontAwesomeIcon icon={faArrowRight} />
          </button></Link>
        </div>
        <div className='right-part'>
          <img src={slides[currentSlide].image} alt="Food" />
        </div>
      </div>
      <div className='slider'>
        <button
          className='left-slider'
          onClick={() => handleSlideChange("prev")}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          className='right-slider'
          onClick={() => handleSlideChange("next")}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Siteheadersection;

