import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Frontend:
                I specialize in frontend development using React, Vue, and Tailwind CSS. With experience in building responsive, user-friendly interfaces, I integrate REST APIs to ensure seamless functionality across web applications.</p>
                <p>Backend:
                For backend development, I work with Spring Boot, Node.js, and Express. I have expertise in both MySQL and MongoDB, creating efficient and scalable APIs to support dynamic, data-driven applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>REST API</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Node Js & Express Js</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>MongoDB & MySql</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF DEVELOPMENT EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects completed</p>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default About
