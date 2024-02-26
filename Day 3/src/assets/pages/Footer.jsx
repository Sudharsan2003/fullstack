
import '../pages/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 AGRO FUNDS. All Rights Reserved.</p>
        <div className="contact-info">
          <p>Contact Us:</p>
          <p>Email: info@agrofunds.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Terms and Policy: <a href="/terms">Read</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
