import React from 'react'
import "./Cover.css";
import { Link } from 'react-router-dom';
const Cover = () => {
  return (
      <>
    <section className="hero">
        <div className="hero-container">
          <h1 className="text-slanted">
            Rest, Relax, Unwind
          </h1>
          <h3>Embrace your choices - we do</h3>
          <Link to="product" className="hero-btn">
            show now
          </Link>
        </div>
      </section>
      </>
  )
}

export default Cover;