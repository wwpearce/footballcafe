import './Textblock.scss';

const Textblock = ({ isMobile, isOpen }) => {
  return (
    <div className={`Textblock ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}>
        <div className="Textblock__content">
            <p>
            Football Cafe is the physical home of the beautiful game. We are a multi-disciplinary hospitality space and in-house streetwear label exploring culture through football. Visit us for a drink, watch a match in our state of the art theater room, or come shop original garments and vintage goods.
            </p>
        </div>
    </div>
  );
}

export default Textblock;