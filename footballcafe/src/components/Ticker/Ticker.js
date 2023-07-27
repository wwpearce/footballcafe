import React, { useState } from 'react';
import './Ticker.scss';

function Ticker({ isMobile, backgroundLoaded }) {
    const [isPaused, setIsPaused] = useState(false);

    function handleMouseEnter() {
      setIsPaused(true);
    }
  
    function handleMouseLeave() {
      setIsPaused(false);
    }
  return (
    <div className="Ticker" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`Ticker__content ${isMobile ? 'mobile' : 'desktop'} ${isPaused ? 'paused' : ''} ${backgroundLoaded ? 'loaded' : ''}`}>
        <span>141 Chrystie St New York, NY</span>
        <span>&mdash;</span>
        <span><a href="">TEXT 917 909 6649</a></span>
        <span>&mdash;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&mdash;</span>
        <span><a href="">TEXT 917 909 6649</a></span>
        <span>&mdash;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&mdash;</span>
        <span><a href="">TEXT 917 909 6649</a></span>
        <span>&mdash;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&mdash;</span>
        <span><a href="">TEXT 917 909 6649</a></span>
        <span>&mdash;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&mdash;</span>
        <span><a href="">TEXT 917 909 6649</a></span>
        <span>&mdash;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&mdash;</span>
        <span><a href="">TEXT 917 909 6649</a></span>
      </div>
    </div>
  );
}

export default Ticker;