import { ReactComponent as OpenMenuButton } from '../../svg/open-button.svg';
import { ReactComponent as CloseMenuButton } from '../../svg/close-button.svg';
import './MenuButton.scss';

function MenuButton({ isOpen, isMobile, toggleNav }) {
  const Button = isOpen ? CloseMenuButton : OpenMenuButton;
  console.log('isOpen:', isOpen);


  return (
    <Button
      className={`menu-button-svg ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}
      onClick={toggleNav}
    />
  );
}

export default MenuButton;