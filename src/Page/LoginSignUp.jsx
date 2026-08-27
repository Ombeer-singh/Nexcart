import React from 'react';
import "../CSS/LoginSignUp.css"

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-field'>
          <input type="text" placeholder='Your name' />
          <input type="Email"placeholder='Email Address' />
          <input type="Password" placeholder='Password' />
           <button>Continue</button>
        </div>
       
        <p className='loginsignup-login'> Already have account ?
          <span> Login Here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type="Check"  name='' id=''/>
          <p>By continuing,i agrre to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  );
};

export default LoginSignUp; 