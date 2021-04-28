import React from 'react';
import Navbar from '../../Navbar';
import Zara from '../../Zara';
import Advisor from '../../Advisor';
import Testimonial from '../../Testimonial';
import Clients from '../../Clients';
import Experience from '../../Experience';
import Services from '../../Services';
import Talk from '../../Talk';
import { testimonialObj } from './Data';

function Home() {
  return (
    <>
      <Navbar />
      <Zara />
      <Testimonial {...testimonialObj} />
      <Advisor />
      <Experience />
      <Services />
      <Clients />
      <Talk />
    </>
  );
}

export default Home;
