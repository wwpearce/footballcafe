import React, { useState, useEffect } from 'react';
import './App.scss';
import Screen from './components/Screen';

import desktopBackgroundImage1 from './img/backgrounds/desktop/background--desktop-1.png';
import desktopBackgroundImage2 from './img/backgrounds/desktop/background--desktop-2.png';
import desktopBackgroundImage3 from './img/backgrounds/desktop/background--desktop-3.png';
import desktopBackgroundImage4 from './img/backgrounds/desktop/background--desktop-4.png';
import desktopBackgroundImage5 from './img/backgrounds/desktop/background--desktop-5.png';
import desktopBackgroundImage6 from './img/backgrounds/desktop/background--desktop-6.png';
import desktopBackgroundImage7 from './img/backgrounds/desktop/background--desktop-7.png';

import mobileBackgroundImage1 from './img/backgrounds/mobile/background--mobile-1.png';
import mobileBackgroundImage2 from './img/backgrounds/mobile/background--mobile-2.png';
import mobileBackgroundImage3 from './img/backgrounds/mobile/background--mobile-3.png';
import mobileBackgroundImage4 from './img/backgrounds/mobile/background--mobile-4.png';
import mobileBackgroundImage5 from './img/backgrounds/mobile/background--mobile-5.png';
import mobileBackgroundImage6 from './img/backgrounds/mobile/background--mobile-6.png';
import mobileBackgroundImage7 from './img/backgrounds/mobile/background--mobile-7.png';

function App() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const getRandomBackgroundImage = () => {
    const backgroundImages = isMobile() ? mobileBackgroundImages : desktopBackgroundImages;
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|phone/i.test(userAgent);
  };

  function isLandscape() {
      const { width, height } = window.screen;
      return width > height;
  };

  const desktopBackgroundImages = [
    desktopBackgroundImage1,
    desktopBackgroundImage2,
    desktopBackgroundImage3,
    desktopBackgroundImage4,
    desktopBackgroundImage5,
    desktopBackgroundImage6,
    desktopBackgroundImage7,
  ];

  const mobileBackgroundImages = [
    mobileBackgroundImage1,
    mobileBackgroundImage2,
    mobileBackgroundImage3,
    mobileBackgroundImage4,
    mobileBackgroundImage5,
    mobileBackgroundImage6,
    mobileBackgroundImage7,
  ];

  (function lockPortraitMode() {
    if (typeof window.screen !== 'undefined') {
      const lockOrientation = window.screen.lockOrientation || window.screen.mozLockOrientation || window.screen.msLockOrientation || (window.screen.orientation && window.screen.orientation.lock);
      if (lockOrientation) {
        lockOrientation.call(window.screen, 'portrait');
      }
    }
  })();

  useEffect(() => {
    const randomBackgroundImage = getRandomBackgroundImage();
    const img = new Image();
    img.src = randomBackgroundImage;
    img.onload = () => {
      setBackgroundImage(randomBackgroundImage);
      setBackgroundLoaded(true);
    };
  }, []);

  return (
    <div className={`App ${isMobile() ? 'mobile' : 'desktop'} ${isLandscape() ? 'landscape' : 'portrait'}`}>
      <Screen backgroundImage={backgroundImage} isMobile={isMobile()} backgroundLoaded={backgroundLoaded}/>
    </div>
  );
}

export default App;