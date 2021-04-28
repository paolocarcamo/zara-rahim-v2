import React from 'react';
import './Services.css';

function Services() {
  return (
    <>
      <div
        className='services-container'
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-duration='1000'
      >
        <h3 id='services-header'>services</h3>
        <h1>brand and messaging strategy</h1>
        <h3>take project from an idea to an action plan</h3>
        <h1>communication development</h1>
        <h3>craft the public facing story in media</h3>
        <h1>partnerships</h1>
        <h3>make connections that get projects into culture</h3>
        <h1>policy and advocacy</h1>
        <h3>political and social good campagin planning</h3>
        <h1>scenario planning</h1>
        <h3>navigate chellenging questions and moments</h3>
      </div>
    </>
  );
}

/* Refactor in the future to where you utilize the Data.js api that we built */

export default Services;
