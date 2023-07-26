import './Screen.scss';
import Textblock from './Textblock/Textblock';


import { ReactComponent as OpenMenuButton } from '../svg/open-button.svg';

function Screen({ backgroundImage, isMobile }) {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <div className="{`Screen ${isMobile ? 'mobile' : 'desktop'}`}">
        <div className={`Screen__content ${isMobile ? 'mobile' : 'desktop'}`} style={style}>
          <OpenMenuButton />
          <Textblock isMobile={isMobile} />
        </div>
    </div>
  );
}

export default Screen;