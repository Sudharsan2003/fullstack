
import './footer.css';
const Footer = () => {
  return (
    <footer className="foot_sec">
      <div className="foot_top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="foot_left">
                <img src="https://ibb.co/1GTcwmk/logo.png" alt="" />
                <p>
                Our platform is dedicated to revolutionizing agricultural financing, providing tailored solutions to empower farmers in their endeavors. Join us in nurturing sustainable agriculture and fostering prosperity in rural communities.                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="foot_rt">
                <h3>CONTACTS</h3>
                <p>
                  <span>Address: </span>
                  123, Green Avenue,
Palm Grove Colony,
Chennai - 600001
India.
                </p>
                <p>
                  <span>Phone: </span>
                  <a href="tel:#">+91 98765 43210, +91 78901 23456</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot_btm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <a href="#"> AGRO FUNDS</a> © 2024. Allright Reserved.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
