import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SellerDetail from '../SellerDetails/SellerDetail';
import { Header } from '../Header';
import { About } from '../About';
// import { Navbar } from '../Navbar/Navbar';
import Testimonial  from '../Testimonial/Testimonial';
import Products from '../Products/Products';
import ContactUs from '../ContactUs/ContactUs';

// import { images } from '../../constants';
import logo from '../../assets/logo-1.PNG';
import './Navbar.css';

export const Navbar = () => {
  const [flag, setFlag] = useState(false);

    const navigateTo = () => {
        setFlag(!flag);
    };

  const [toggle, setToggle] = useState(false);
    const styles = {
      width: '98%',
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.5rem 1rem",
      background: "rgba(255, 255, 255, 0.25)",
      "backdrop-filter": "blur(4px)",
      "-webkit-backdrop-filter": "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      zIndex:"2",
      borderRadius:"30px",
      position:'absolute'
    };

  return (
    <>
    <nav className={`${flag ? {styles} : 'app__navbar' }`}>
    {/* <nav className='app__navbar'> */}
      {/* <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div> */}

      {
        !flag && <ul className="app__navbar-links">
        {['home', 'about', 'Products', 'Testimonials', 'contact'].map((item) => (
          <li className="app__flex .nav-links" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      }

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'Products', 'Testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      {/* <form className="container-fluid justify-content-end"> */}
        <button className="btn link-item" type="button" onClick={ ()=> navigateTo()}>
        { flag === false? 'Switch to seller mode' : 'Switch to buyer mode' }
        </button>
      {/* </form> */}
    </nav>
      { flag === false ?
      <>
      <Header/>
      <About/>
      <Products/>
      <Testimonial/>
      <ContactUs/>
      </>
      : <SellerDetail/> }
      </>
  );
};

// export default Navbar;