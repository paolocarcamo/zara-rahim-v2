import React from 'react';
import './Advisor.css';

/* Refactor using Data.js api */

function HeroSection({ lightBg, lightText }) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div
          className='zara-container'
          data-aos='fade-up'
          data-aos-offset='10'
          data-aos-duration='1000'
        >
          <div className='row home__hero-row'>
            <div className='zara'>
              <h1 className={lightText ? 'heading' : 'heading dark'}>
                ZARA RAHIM
              </h1>
            </div>
            <div className='advisor'>
              <h1 className={lightText ? 'heading' : 'heading dark'}>
                IS A STRATEGIC ADVISOR TO
              </h1>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-offset='10' data-aos-duration='1500'>
          <h1 className='past-client-types'>
            business leaders, <br />
            startups, <br />
            a-z list celebrities, <br />
            iconic brands, <br />
            media properties, <br />
            meme-lords, <br />
            comedians, <br />
            villians, heroes, <br />
            and friends.
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
