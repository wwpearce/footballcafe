import React, { useEffect } from 'react';
import './Announcement.scss';

function Announcement({
  headingContent,
  isAnnouncementVisible,
  toggleAnnouncement,
  isDesktop,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleAnnouncement();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [toggleAnnouncement]);

  return (
    <div
      className={`Announcement ${
        isAnnouncementVisible ? 'visible' : ''
      }
      ${isDesktop ? 'desktop' : ''}`}
    >
      <h1>{headingContent}</h1>
    </div>
  );
}

export default Announcement;
