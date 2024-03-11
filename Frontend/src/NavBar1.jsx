import  { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar1 = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate('/profile');
  }

  // Placeholder for checking login status
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='headgreen'>
      <div className="responsive-bar">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <div className="logo">
          <img src="https://www.deacapitalaf.com/wp-content/uploads/2023/12/Agro-Logo-Verde.jpg" alt="logo" />
        </div>
        <ul>
          <li><a href="/adminHome">Dashboard</a></li>
          <li><a href="/loanStatus">Loan Status</a></li>
          <li><a href="/schemes">Scheme Details</a></li>
          <li><a href="/adminProfile">Profile</a></li>
          </ul>
         
      </nav>
    </header>
  );
};

export default NavBar1;
