import React, { useState } from 'react';
import './Nav.scss';

function Nav({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav
      className={`Nav ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}
      onTouchStart={handleTouchStart}
    >
      <ul>
        <li><a href="https://github.com">FC</a></li>
        <li><a href="https://github.com">Program</a></li>
        <li><a href="https://github.com">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Nav;