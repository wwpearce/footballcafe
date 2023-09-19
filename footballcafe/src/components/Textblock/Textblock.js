import './Textblock.scss';
import { ReactComponent as InstagramIcon } from '../../svg/instagram-icon.svg';
import { ReactComponent as EmailIcon } from '../../svg/email-icon.svg';

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
        <a
          href="https://www.instagram.com/footballcafe_fc/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icons" />
        </a>
        <a
          href="https://footballcafe.myshopify.com/pages/contact"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Textblock;
