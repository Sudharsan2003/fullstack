import  { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
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
          <img src="https://www.deacapitalaf.com/wp-content/uploads/2023/12/Agro-Logo-Verde.jpg" alt="logo" />
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
          <li><a href="/">Home</a></li>
          <li><a href="/loan">Apply Loan</a></li>
          <li><a href="/status">Loan Status</a></li>
          <li><a href="/pro">Profile</a></li>
          <li><a href="/cont">FeedBack</a></li>
          </ul>
         <div className='loggg'>
            {isLoggedIn ? (
              <div onClick={gotoProfile}>
                <Avatar alt="" src="/static/images/avatar/1.jpg" />
                <div className="nav_item" style={{ marginLeft: "-8px", color: "white" }}>
                  {/* Additional content for the profile */}
                </div>
              </div>
            ) : (
              <Button class='txt' href="/login">LOGIN</Button>
            )}
          </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
