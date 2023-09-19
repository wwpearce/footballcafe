import './Nav.scss';
import { useState } from 'react';

function Nav({
  isMobile,
  isOpen,
  toggleNav,
  toggleDefault,
  isDefault,
  toggleAnnouncement,
}) {
  const [showOverlay] = useState(false);

  return (
    <nav
      className={`Nav ${isMobile ? 'mobile' : 'desktop'} ${
        isOpen ? 'open' : ''
      }`}
    >
      <ul>
        <li>
          <a href="https://footballcafe.myshopify.com/collections/all">
            Shop
          </a>
        </li>
        <li>
          <a href="https://footballcafe.myshopify.com/pages/about">
            About
          </a>
        </li>
        <li>
          <a href="https://footballcafe.myshopify.com/pages/events">
            Events
          </a>
        </li>
      </ul>
      {showOverlay && (
        <div className="overlay">
          <p>COMING SOON</p>
        </div>
      )}
    </nav>
  );
}

export default Nav;
