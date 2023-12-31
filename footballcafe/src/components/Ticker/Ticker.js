import React, { useState } from 'react';
import './Ticker.scss';

const tickerDest =
  'https://my.community.com/kylemartinosfootballcafe';

function Ticker({ isMobile, backgroundLoaded }) {
  const [isPaused, setIsPaused] = useState(false);

  function handleMouseEnter() {
    setIsPaused(true);
  }

  function handleMouseLeave() {
    setIsPaused(false);
  }
  return (
    <div
      className={`Ticker ${isMobile ? 'mobile' : 'desktop'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`Ticker__content ${
          isMobile ? 'mobile' : 'desktop'
        } ${isPaused ? 'paused' : ''} ${
          backgroundLoaded ? 'loaded' : ''
        }`}
      >
        <span>141 Chrystie St New York, NY</span>
        <span>&lt;•&gt;</span>
        <span>
          <a href={tickerDest}>TEXT 917 909 6649</a>
        </span>
        <span>&lt;•&gt;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&lt;•&gt;</span>
        <span>
          <a href={tickerDest}>TEXT 917 909 6649</a>
        </span>
        <span>&lt;•&gt;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&lt;•&gt;</span>
        <span>
          <a href={tickerDest}>TEXT 917 909 6649</a>
        </span>
        <span>&lt;•&gt;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&lt;•&gt;</span>
        <span>
          <a href={tickerDest}>TEXT 917 909 6649</a>
        </span>
        <span>&lt;•&gt;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&lt;•&gt;</span>
        <span>
          <a href={tickerDest}>TEXT 917 909 6649</a>
        </span>
        <span>&lt;•&gt;</span>
        <span>141 Chrystie St New York, NY</span>
        <span>&lt;•&gt;</span>
        <span>
          <a href={tickerDest}>TEXT 917 909 6649</a>
        </span>
      </div>
    </div>
  );
}

export default Ticker;
