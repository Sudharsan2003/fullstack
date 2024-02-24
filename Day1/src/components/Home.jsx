import '../components/Home.css'
function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Agriculture Loan Portal</h1>
      </header>

      <section className="about-agro-funds">
        <div className="about-content">
          <h2>About Our Agro Funds</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis id purus lacinia luctus sed vel
            libero.
          </p>
        </div>
        <div className="image-container">
          <img src="/images/agro-funds.jpg" alt="Agro Funds" />
        </div>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/your_agro_portal" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/your_agro_portal" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="mailto:info@agroportal.com">
            <img src="/images/email-icon.png" alt="Email" />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/terms-policy">Terms Policy</a>
        </div>
        <p>&copy; 2024 Agriculture Loan Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
