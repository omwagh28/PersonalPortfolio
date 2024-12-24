import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resumeFile from '../../assets/Om_Wagh_Resume.pdf';  // Your resume file

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Om Wagh,</span> MERN STACK developer based in India.</h1>
      <p>I am a MERN Stack developer from Bangalore, India, and a student of Scaler School of Technology.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me,</AnchorLink>
        </div>
        {/* Link to download the resume */}
        <div className="hero-resume">
          <a href={resumeFile} download="Om_Wagh_Resume.pdf">My resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
