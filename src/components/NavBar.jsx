import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="" className="logo" />
          <h1>Space Travellers' Hub</h1>
        </div>
        <ul>
          <li></li> //add links here
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
