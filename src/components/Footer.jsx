function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>About COEK</h3>
              <p>
                Dr. D. Y. Patil College of Engineering & Technology is committed to
                providing quality education and fostering innovation in engineering.
              </p>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">YouTube</a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Admission</a></li>
                <li><a href="#">Academics</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Placement</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Important Links</h3>
              <ul>
                <li><a href="#">AICTE</a></li>
                <li><a href="#">Shivaji University</a></li>
                <li><a href="#">NAAC</a></li>
                <li><a href="#">NBA</a></li>
                <li><a href="#">NIRF</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact Us</h3>
              <p>
                <strong>Address:</strong><br />
                Kasaba Bawada, Kolhapur<br />
                Maharashtra - 416 006<br /><br />
                <strong>Phone:</strong> +91-231-2601234<br />
                <strong>Email:</strong> info@coek.edu.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Dr. D. Y. Patil College of Engineering & Technology. All Rights Reserved.</p>
          <p>Designed & Developed for Educational Project</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
