import '../pages/css/Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <div className="basic-details">
          <p><strong>Address:</strong> 123 Main St, Chennai, Tamil Nadu, 123456</p>
          <p><strong>Email:</strong> info@agrofunds.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </div>
        <div className="social-media">
          <p><strong>Follow Us:</strong></p>
          <ul>
            <li><a href="https://www.instagram.com/agrofunds" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/agrofunds" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com/agrofunds" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
