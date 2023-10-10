import logo from '../images/logo.png';

const NavBar = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
        <h1>Space Travellers Hub</h1>
      </div>
      <ul className="list-item">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
