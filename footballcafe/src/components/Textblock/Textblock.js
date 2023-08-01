import './Textblock.scss';

const Textblock = ({ isMobile, isOpen, textBlockContent, textBlockHeading, isDefault }) => {
  // const HeadingTag = isDefault ? 'p' : 'h1';

  return (
    <div className={`Textblock ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}>
        <div className="Textblock__content">
            <p>
            {isDefault ? textBlockContent : textBlockHeading}
            </p>
        </div>
    </div>
  );
}

export default Textblock;