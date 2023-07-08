import React from 'react'
import "./Hero.css";
const Hero = (props) => {
  return (
    <div>
        <section className="page-hero">
      <div className="section-center">
        <h3 className="page-hero-title">Home / {props.name}</h3>
      </div>
    </section>
    </div>
  )
}

export default Hero