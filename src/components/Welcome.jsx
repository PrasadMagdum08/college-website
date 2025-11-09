function Welcome() {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <div className="principal-image">
            <img src="./sanjay.png" alt="Principal" />
            <h3>Principal's Message</h3>
          </div>
          <div className="welcome-text">
            <h2>Welcome to COEK</h2>
            <p>
              It gives me immense pleasure to welcome you to Dr. D. Y. Patil College of
              Engineering & Technology, Kolhapur. Our institution has been at the forefront
              of technical education, consistently producing skilled engineers who contribute
              significantly to society and industry.
            </p>
            <p>
              We believe in holistic development of our students through a perfect blend of
              academic excellence, research initiatives, and co-curricular activities. Our
              state-of-the-art infrastructure, experienced faculty, and industry connections
              provide an ideal environment for learning and growth.
            </p>
            <p>
              I invite you to explore the opportunities available at our institution and
              become part of our legacy of excellence.
            </p>
            <p className="signature">
              <strong>Dr. [Principal Name]</strong><br />
              Principal, COEK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
