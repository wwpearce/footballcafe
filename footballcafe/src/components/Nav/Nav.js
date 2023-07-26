import './Nav.scss';

function Nav({ isMobile, isOpen }) {
  return (
    <nav className={`Nav ${isMobile ? 'mobile' : 'desktop'} ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="https://github.com">FC</a></li>
        <li><a href="https://github.com">Program</a></li>
        <li><a href="https://github.com">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Nav;