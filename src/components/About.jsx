function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About College</h2>
            <p>
              Dr. D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur
              is one of the premier Engineering colleges in Maharashtra. The college is
              affiliated to Shivaji University, Kolhapur and approved by AICTE, New Delhi.
            </p>
            <p>
              The institute offers undergraduate programs in Computer Engineering, Mechanical
              Engineering, Civil Engineering, Electrical Engineering, and Electronics &
              Telecommunication Engineering. It also offers postgraduate programs in various
              specializations.
            </p>
            <div className="accreditation">
              <div className="accred-item">
                <h3>NBA Accredited</h3>
                <p>All programs are NBA accredited</p>
              </div>
              <div className="accred-item">
                <h3>NAAC A+ Grade</h3>
                <p>Accredited with A+ Grade</p>
              </div>
              <div className="accred-item">
                <h3>Autonomous Status</h3>
                <p>Granted Autonomous Status</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="./image_3.png" alt="College Building" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
