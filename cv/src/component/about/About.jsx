import React, {useState} from 'react'
import './about.css'
import {Container, Row, Col} from 'reactstrap'
import aboutImg from '../asset/Picsart_22-04-27_16-03-51-337.png'
import Education from './Education'
import Skill from "./Skill"

const About = () => {
  const [aboutFilter, setAboutFilter] = useState('ABOUT')
  return (
    <section id="about">
      <Row>
        <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
        <Col lg='4' md='3' className='mb-5'>
        <div className='about_btns d-flex flex-column align-items-center'>
     <button className='about_btn about_btn-active' onCLick={() => setAboutFilter('ABOUT')}>About Me</button>
        <button className='about_btn' onClick={() =>setAboutFilter('EDUCATION')}>Education</button>
        <button className='about_btn' onClick={() =>setAboutFilter('SKILL')}>Skills</button>
        </div>
        </Col>
        <Col lg='8' md='9' className='mb-5'>
          {
            aboutFilter === 'ABOUT' &&   <div className="about_content_wrapper d-flex gap-5">
        <div className="about_img w-25">
     <img src={aboutImg} alt=""  className="w-100"/>
        </div>
        <div className='about_content w-75'>
        <h2>I'm Latif Budi P</h2>
        <p> Lorem jabaisbebjwnskssnkssi</p>
        <div className='social_links'>
          <h6 className='mb-3'>Connect with me:</h6>
          <span><a href='#'>
<i class="ri-facebook-line"></i>
          </a></span>
          <span><a href='#'>
<i class="ri-github-fill"></i>
          </a></span>
          <span><a href='#'>
<i class="ri-linkedin-fill"></i>
          </a></span>
          <span><a href='#'>
<i class="ri-instagram-line"></i>
          </a></span>
        </div>
        </div>
        </div>
         }
         
         {
           aboutFilter === 'EDUCATION' && <Education/>
         }
         
         {
           aboutFilter === 'SKILL' && <Skill/>
         }
      </Col>
      </Row>
    </section>
    )
}

export default About