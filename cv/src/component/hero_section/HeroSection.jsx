import React,{useRef, useEffect} from 'react'
import './herosection.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../asset/Picsart_22-04-27_16-03-51-337.png'
import {init} from 'ityped'

const HeroSection = () => {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      backDelay:1500,
      showCursor: true,
      strings:[
        'Latif Budi Pamungkas',
        'a web developer',
        'graphic designer'
        ]
    })
  }, [])
  return (
    <section className="hero_section" id="home">
  <Container>
  <Row>
    <Col lg='6' md='6'>
      <div className="hero_content">
        <p className="mb-3">welcome to my world</p>
        <h5 className="mb-4">Hi</h5>
        <h2 className="hero_title mb-4">I'm <span ref={textRef}></span></h2>
        <p>jdjsnsjsksksmsjdhfjdnendkdnxnjndjdndnjdndkndjksnksnsjsn</p>
        
        <div className='mt-4 hero_btns d-flex align-items-center gap-4'>
          <button className="btn"><a href='#'>Hire Me</a></button>
          <button className="btn">Contact</button>
        </div>
      </div>
    </Col>
    <Col lg='6' md='6'>
      <div className="hero_img">
      <img src={heroImg} alt=""/>
      </div>
    </Col>
  </Row>
  </Container>
  
  </section>
  )
    
    
}

export default HeroSection