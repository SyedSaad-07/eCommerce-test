import React, { useState } from 'react';
import images  from '../../assets';
import { AppWrap, MotionWrap } from '../../wrapper';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const { message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // const contact = {
    //   _type: 'contact',
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message,
    // };

    setIsFormSubmitted(true);
};

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with Us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="#" className="p-text">info@exotix.website.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="#" className="p-text">+1(307)3003265</a>
        </div>

      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div>
            <textarea
              className="p-text"
              placeholder="leave a comment!"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text"  onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      
       ) : (
        <div>
           <h4 className="head-text toLower">
            Thank you for visitng our site, You can email us at info@exotix.website.com !
           </h4>
         </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(ContactUs, 'app__footer'),
  'contact',
//   'app__whitebg',
);