import '../pages/css/Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from '../Images/logo.webp'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="AGRO FUNDS" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
