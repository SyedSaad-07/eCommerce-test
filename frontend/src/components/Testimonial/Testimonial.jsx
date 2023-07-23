import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Testimonials from '../../data';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.css';

const Testimonial = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };


  return (
    <>
      {Testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex" id='Testimonials'>
            <img src={Testimonials[currentIndex].image} alt='S.M.S' />
            <div className="app__testimonial-content">
              <p className="p-text">{Testimonials[currentIndex].feedback}</p>
              <div>                
                  <h4 className="bold-text">{Testimonials[currentIndex].name}</h4>
              </div>             
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? Testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === Testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);