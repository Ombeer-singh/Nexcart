import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/popular';
import Offers from "../components/Offers/Offers"
import Newcollections from '../components/Newcollections/Newcollections';
import NewLetter from '../components/Newletter/Newletter';
// import LoginSignUp from './LoginSignUp';

const Shop= () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <NewLetter/>
      {/* <LoginSignUp/> */}
     
    </div>
  );
};

export default Shop; 