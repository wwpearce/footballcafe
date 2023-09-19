import './Textblock.scss';
import { ReactComponent as InstagramIcon } from '../../svg/instagram-icon.svg';
import { ReactComponent as TwiterIcon } from '../../svg/twitter-icon.svg';

const Textblock = ({
  isMobile,
  isOpen,
  textBlockContent,
  textBlockHeading,
  isDefault,
}) => {
  // const HeadingTag = isDefault ? 'p' : 'h1';

  return (
    <div
      className={`Textblock ${isMobile ? 'mobile' : 'desktop'} ${
        isOpen ? 'open' : ''
      }`}
    >
      <div className="Textblock__content">
        <p>{isDefault ? textBlockContent : textBlockHeading}</p>
      </div>
      <div className="link-container">
        <a href="instagram.com">
          <InstagramIcon className="icons" />
        </a>
        <a href="twitter.com">
          <TwiterIcon className="icons" />
        </a>
        <a href="apple.com">contact</a>
      </div>
    </div>
  );
};

export default Textblock;
