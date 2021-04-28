import React from 'react';
import './Zara.css';
import { Link } from 'react-scroll';

function Zara() {
  return (
    <>
      <div className='zara-wrapper'>
        <Link to='testimonial-section' smooth={true}>
          <h1 className='name'>ZARA RAHIM</h1>
        </Link>
      </div>
    </>
  );
}

export default Zara;
