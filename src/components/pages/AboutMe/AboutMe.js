import React from 'react';
import HeroSection from '../../HeroSection';
import { aboutMeObj } from './Data';

function Products() {
  return (
    <>
      <HeroSection {...aboutMeObj} />
    </>
  );
}

export default Products;
