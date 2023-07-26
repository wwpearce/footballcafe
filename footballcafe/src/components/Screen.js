import { useState } from 'react';
import './Screen.scss';
import Textblock from './Textblock/Textblock';
import Nav from './Nav/Nav';
import Ticker from './Ticker/Ticker';
import MenuButton from './MenuButton/MenuButton';

function Screen({ backgroundImage, isMobile }) {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log("sup");
  };

  return (
    <div className={`Screen ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className={`Screen__content ${isMobile ? 'mobile' : 'desktop'}`} style={style}>
          <MenuButton className={`menu-button-svg ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`} isOpen={isOpen} toggleNav={toggleNav} />
          <Nav isMobile={isMobile} isOpen={isOpen} />
          <Textblock isMobile={isMobile} isOpen={isOpen}/>
          <Ticker isMobile={isMobile}/>
        </div>
    </div>
  );
}

export default Screen;