import React from 'react';
import HeroSection from '../../HeroSection';
import { contactObj } from './Data';

function SignUp() {
  return (
    <>
      <HeroSection {...contactObj} />
    </>
  );
}

export default SignUp;
