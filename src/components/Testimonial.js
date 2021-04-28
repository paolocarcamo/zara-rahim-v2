import React from 'react';
import './Testimonial.css';

function Testimonial({ quote, quotee, alt }) {
  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <div className='start-quote'>
            <img className='quoteImg' src={quote} alt={alt} />
          </div>
          <div className='col testimonial-row'>
            <div className='quote-wrapper'>
              <h1 className='quoted-text'>
                She wouldn't <br />
                take no for an <br />
                answer.
              </h1>
              <p>{quotee}</p>
            </div>
          </div>
          <div className='end-quote'>
            <img className='quoteImg' src={quote} alt={alt} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
