import './Nav.scss';

function Nav({ isMobile, isOpen }) {
  return (
    <nav className={`Nav ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#">FC</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Nav;