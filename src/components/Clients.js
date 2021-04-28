import React from 'react';
import './Clients.css';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  shiftRight,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className='clients-container'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-duration='1000'
      >
        <h3>clients</h3>
        <div className='client-list'>
          <h1 className='previous-clients'>
            <span id='vogue'>vogue magazine</span>
            <img
              src='https://assets.vogue.com/photos/593ef4c38ba2821cdbcb8fc8/master/w_2207,h_3000,c_limit/08-zendaya-coleman-vogue-july-2017.jpg'
              alt=''
              id='vogue-image'
            />
          </h1>
          <br />
          <h1 className='previous-clients'>
            <span id='hillary'>hillary for america</span>
            <img
              src='https://www.iupat.org/wp-content/uploads/hillary-for-america.png'
              alt=''
              id='vogue-image'
            />
          </h1>
          <br />
          <h1 className='previous-clients'>uber</h1>
          <br />
          <h1 className='previous-clients'>obama for america</h1>
          <br />
          <h1 className='previous-clients'>the white house</h1>
          <br />
          <h1 className='previous-clients'>the wing</h1>
          <br />
          <h1 className='previous-clients'>a24</h1>
          <br />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
