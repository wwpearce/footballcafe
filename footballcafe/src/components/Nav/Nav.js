import './Nav.scss';
import { useState } from 'react';

function Nav({ isMobile, isOpen, toggleNav, toggleDefault, isDefault }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNavItemClick = () => {
    if (isDefault) {
      toggleDefault();
    }
    toggleNav();
  };

  const handleFCClick = () => {
    if (!isDefault) {
      toggleDefault();
    }
    toggleNav();
  };

  return (
    <nav className={`Nav ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><div onClick={handleFCClick}>FC</div></li>
        <li><div onClick={handleNavItemClick}>Program</div></li>
        <li><div onClick={handleNavItemClick}>Shop</div></li>
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