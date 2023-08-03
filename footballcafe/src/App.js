import React, { useState, useEffect } from 'react';
import './App.scss';
import Screen from './components/Screen';

import desktopBackgroundImage1 from './img/backgrounds/desktop/background--desktop-1_@2x.jpg';
import desktopBackgroundImage2 from './img/backgrounds/desktop/background--desktop-2_@2x.jpg';
import desktopBackgroundImage3 from './img/backgrounds/desktop/background--desktop-3_@2x.jpg';
import desktopBackgroundImage4 from './img/backgrounds/desktop/background--desktop-4_@2x.jpg';
import desktopBackgroundImage5 from './img/backgrounds/desktop/background--desktop-5_@2x.jpg';
import desktopBackgroundImage6 from './img/backgrounds/desktop/background--desktop-6_@2x.jpg';
import desktopBackgroundImage7 from './img/backgrounds/desktop/background--desktop-7_@2x.jpg';
import smallDesktopBackgroundImage2 from './img/backgrounds/desktop_@1x/background--desktop-2_@1x.jpg';
import smallDesktopBackgroundImage3 from './img/backgrounds/desktop_@1x/background--desktop-3_@1x.jpg';
import smallDesktopBackgroundImage4 from './img/backgrounds/desktop_@1x/background--desktop-4_@1x.jpg';
import smallDesktopBackgroundImage5 from './img/backgrounds/desktop_@1x/background--desktop-5_@1x.jpg';
import smallDesktopBackgroundImage6 from './img/backgrounds/desktop_@1x/background--desktop-6_@1x.jpg';
import smallDesktopBackgroundImage7 from './img/backgrounds/desktop_@1x/background--desktop-7_@1x.jpg';
import smallDesktopBackgroundImage1 from './img/backgrounds/desktop_@1x/background--desktop-1_@1x.jpg';

import mobileBackgroundImage1 from './img/backgrounds/mobile/background--mobile-1.jpg';
import mobileBackgroundImage2 from './img/backgrounds/mobile/background--mobile-2.jpg';
import mobileBackgroundImage3 from './img/backgrounds/mobile/background--mobile-3.jpg';
import mobileBackgroundImage4 from './img/backgrounds/mobile/background--mobile-4.jpg';
import mobileBackgroundImage5 from './img/backgrounds/mobile/background--mobile-5.jpg';
import mobileBackgroundImage6 from './img/backgrounds/mobile/background--mobile-6.jpg';
import mobileBackgroundImage7 from './img/backgrounds/mobile/background--mobile-7.jpg';

function App() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const getRandomBackgroundImage = () => {
    const backgroundImages = isMobile()
      ? mobileBackgroundImages
      : window.innerWidth < 1024
      ? smallDesktopBackgroundImages
      : desktopBackgroundImages;
    const randomIndex = Math.floor(
      Math.random() * backgroundImages.length
    );
    return backgroundImages[randomIndex];
  };

  const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|phone/i.test(userAgent);
  };

  function isLandscape() {
    const { width, height } = window.screen;
    return width > height;
  }

  const desktopBackgroundImages = [
    desktopBackgroundImage1,
    desktopBackgroundImage2,
    desktopBackgroundImage3,
    desktopBackgroundImage4,
    desktopBackgroundImage5,
    desktopBackgroundImage6,
    desktopBackgroundImage7,
  ];

  const smallDesktopBackgroundImages = [
    smallDesktopBackgroundImage1,
    smallDesktopBackgroundImage2,
    smallDesktopBackgroundImage3,
    smallDesktopBackgroundImage4,
    smallDesktopBackgroundImage5,
    smallDesktopBackgroundImage6,
    smallDesktopBackgroundImage7,
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
    <div
      className={`App ${isMobile() ? 'mobile' : 'desktop'} ${
        isLandscape() ? 'landscape' : 'portrait'
      }`}
    >
      <Screen
        backgroundImage={backgroundImage}
        isMobile={isMobile()}
        backgroundLoaded={backgroundLoaded}
      />
    </div>
  );
}

export default App;
