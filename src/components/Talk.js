import React from 'react';
import './Talk.css';

function Talk() {
  return (
    <>
      <div
        className='talk-container'
        data-aos='fade-zoomin'
        data-aos-offset='500'
        data-aos-duration='1000'
      >
        <a href='mailto:paolo.n.carcamo@gmail.com'>
          <h1 className='talk-heading'>let's talk</h1>
        </a>
        <br />
        <p className='find-me-on'>you can also find me on</p>
        <br />
        <div className='social-container'>
          <div id='twitter-container'>
            <a href='https://www.twitter.com/zararahim'>
              <p id='twitter'>TWITTER</p>
            </a>
          </div>
          <p id='ampersand'>&</p>
          <div>
            <a href='https://www.instagram.com/zararahim/'>
              <p id='instagram'>INSTAGRAM</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Talk;
