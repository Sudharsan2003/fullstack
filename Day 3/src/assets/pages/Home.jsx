import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming Navbar component is in the same directory
import Footer from './Footer'; // Assuming Footer component is in the same directory
import '../pages/css/Home.css';

// Import your images
import aboutImage from '../Images/kisan.avif';
import eligibilityImage from '../Images/eligibilityImage.jpg';
import schemesImage from '../Images/schemes.jpg'
import loanQuantumImage from '../Images/quantum.jpg';
import loanInterestImage from '../Images/agriloan.jpg';
import deliveryImage from '../Images/delivery.jpg';
import contactImage from '../Images/contact us.jpg';
import circularImage from '../Images/circular.avif';
// Import other images similarly

const Home = () => {
  const [ setAdditionalInfo] = useState({
    about: false,
    eligibility: false,
    schemes: false,
    loanQuantum: false,
    loanInterest: false,
    contactus: false,
    circulars: false
  });

  const toggleInfo = (topic) => {
    setAdditionalInfo(prevState => ({
      ...prevState,
      [topic]: !prevState[topic]
    }));
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="welcome-section">
        <h1>WELCOME TO AGRO FUNDS</h1>
        <p>Agro Funds is your trusted partner in agricultural financing. We provide a range of financial solutions to support agricultural ventures and empower farmers.</p>
      </div>
      <div className="info-section">
        <div className="info-box" onClick={() => toggleInfo('about')}>
          <img src={aboutImage} alt="About" />
          <h2>About</h2>
          <p>The Kisan Credit Card (KCC) scheme is a credit scheme introduced in August 1998 by Indian public sector banks.</p>
          <Link to="/Kisan" className="btn-secondary">Know More</Link>
        </div>
        <div className="info-box" onClick={() => toggleInfo('eligibility')}>
          <img src={eligibilityImage} alt="Eligibility" />
          <h2>Eligibility</h2>
          <p>Please Know your Eligibility Before Applying Loan.</p>
          <Link to="/eligibility" className="btn-secondary">Know More</Link>
        </div>
        <div className="info-box" onClick={() => toggleInfo('schemes')}>
          <img src={schemesImage} alt="Schemes" />
          <h2>Schemes</h2>
          <p>Please Know your Schemes Before Applying Loan.</p>
          <Link to="/schemes" className="btn-secondary">Know More</Link>
        </div>
        {/* Add more info-boxes with images */}
        <div className="info-box" onClick={() => toggleInfo('loanQuantum')}>
          <img src={loanQuantumImage} alt="Loan Quantum" />
          <h2>Loan Quantum</h2>
          <p>   Please Know your Loan Quantum for Applying Loan.  </p>
          <Link to="/loanquantum" className="btn-secondary">Know More</Link>
        </div>
        <div className="info-box" onClick={() => toggleInfo('loanInterest')}>
          <img src={loanInterestImage} alt="Loan Interest" />
          <h2>Loan Interest</h2>
          <p>Please Know your Loan Interest Before Applying Loan.</p>
          <Link to="/loaninterest" className="btn-secondary">Know More</Link>
        </div>
        <div className="info-box" onClick={() => toggleInfo('delivery')}>
          <img src={deliveryImage} alt="Delivery Channel" />
          <h2>Delivery Channel</h2>
          <p>Please Know about Delivery Channel.</p>
          <Link to="/delivery" className="btn-secondary">Know More</Link>
        </div>
        <div className="info-box" onClick={() => toggleInfo('contact')}>
          <img src={contactImage} alt="Contact Us" />
          <h2>Contact Us</h2>
          <p>Please Know about Contact Us.</p>
          <Link to="/contact" className="btn-secondary">Know More</Link>
        </div>
        <div className="info-box" onClick={() => toggleInfo('circular')}>
          <img src={circularImage} alt="Circulars" />
          <h2>Circulars</h2>
          <p>Please Know your Circulars.</p>
          <Link to="/circular" className="btn-secondary">Know More</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
