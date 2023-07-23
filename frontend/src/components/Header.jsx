import React from 'react'
import homeBanner from '../assets/home-banner.png';

export const Header = () => {
  return (
    <section class="home-section align-item-center active banner" id="home">
        <div class="container">
            <div class="row align-item-center">
                <div class="home-text">
                    <p>Hello,</p>
                    <h1>Welcome to the marketplace</h1>
                    {/* <h2>We Sell different categories of Products</h2> */}
                    <p>We Sell different categories of Products of multiple brands</p>
                    <a href="#about" class="btn link-item">Learn more About Us.</a>
                    <a href="#Products" class="btn link-item">Our Products</a>
                </div>
                <div class="home-img">
                    <div class="img-box">
                        <img src={homeBanner} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
