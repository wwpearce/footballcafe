import React, { useState } from 'react';
import './Screen.scss';
import Textblock from './Textblock/Textblock';
import Nav from './Nav/Nav';
import Ticker from './Ticker/Ticker';
import MenuButton from './MenuButton/MenuButton';

function Screen({ backgroundImage, isMobile, backgroundLoaded }) {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log("sup");
  };

  const handleTouchStart = (event) => {
    if (isMobile && isOpen) {
      const touch = event.touches[0];
      const startX = touch.clientX;
      const startY = touch.clientY;
      event.target.addEventListener('touchmove', handleTouchMove);
      event.target.addEventListener('touchend', handleTouchEnd);

      function handleTouchMove(event) {
        const touch = event.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          event.preventDefault();
        }
      }

      function handleTouchEnd(event) {
        event.target.removeEventListener('touchmove', handleTouchMove);
        event.target.removeEventListener('touchend', handleTouchEnd);
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < -50) {
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <div className={`Screen ${isMobile ? 'mobile' : 'desktop'} ${backgroundLoaded ? 'fade-in' : 'black'}`} onTouchStart={handleTouchStart}>
        <div className={`Screen__content ${isMobile ? 'mobile' : 'desktop'}`} style={style}>
          <MenuButton className={`menu-button-svg ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`} isOpen={isOpen} toggleNav={toggleNav} />
          <Nav isMobile={isMobile} isOpen={isOpen} />
          <Textblock isMobile={isMobile} isOpen={isOpen}/>
          <Ticker isMobile={isMobile} backgroundLoaded={backgroundLoaded}/>
        </div>
    </div>
  );
}

export default Screen;