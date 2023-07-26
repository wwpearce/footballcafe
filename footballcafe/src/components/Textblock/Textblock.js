import './Textblock.scss';

const Textblock = ({ isMobile, isOpen }) => {
  return (
    <div className={`Textblock ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}>
        <div className="Textblock__content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit mod tempor.
            </p>
        </div>
    </div>
  );
}

export default Textblock;