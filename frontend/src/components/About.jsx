import React from 'react'
import aboutBanner from '../assets/logo-2-about.png';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section class="about-section sec-padding" id="about">
    <motion.div class="container">
        <div class="row">
            <div class="section-title">
                <h3>About Us</h3>
            </div>
            <div class="section-title">
                <h2>Why Choose US ?</h2>
            </div>
        </div>
        <div class="row">
            <div class="about-img">
                <div class="img-box">
                    <img src={aboutBanner} alt="about img"/>
                </div>
            </div>
            <div class="about-text">
                {/* <p>We are trusted marketplace of different brands, and our client belive in our services. We sell many types of products of multiple brands including HouseHold,
                Kitchen & Dinning, Sports & Outdoor, Baby Products and, much more.
                </p> */}
                <p>We are trusted marketplace of different brands, and our client belive in our services. We sell many types of products of multiple brands.
                </p>
                <h3>The Products we Sells!</h3>
                <div class="skills">
                    <div class="skill-item">Clothing</div>
                    <div class="skill-item">Shoe wear</div>
                    <div class="skill-item">HouseHold items</div>
                    <div class="skill-item">Electronics</div>
                    <div class="skill-item">Sports</div>
                    <div class="skill-item">Baby Products</div>
                    <div class="skill-item">Industrial & Scientific</div>
                </div>

            </div>
        
            {/* <a href="#Testimonials" class="btn link-item">Testimonials</a> */}
            {/* <a href="#contact" class="btn link-item">contact me</a> */}
        </div>
    </motion.div>
{/* </div> */}
</section>
  )
}
