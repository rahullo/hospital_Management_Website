import React from 'react';
import './LandingPage.css'; // Add CSS for styling


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Hospital Management System</h1>
          <div className='divider'></div>
          <nav className="nav">
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/login" className="btn">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Efficient Hospital Management at Your Fingertips</h2>
          <p>Streamline patient care, food delivery, and diet chart management all in one platform.</p>
          <a href="/register" className="btn btn-primary">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h3>Features</h3>
          <div className='divider'></div>
          <div className="features-grid">
            <div className="feature">
              <h4>Patient Management</h4>
              <p>Keep track of patient details and manage records effortlessly.</p>
            </div>
            <div className="feature">
              <h4>Food Delivery Tracking</h4>
              <p>Monitor and manage food deliveries with real-time updates.</p>
            </div>
            <div className="feature">
              <h4>Diet Chart Management</h4>
              <p>Create and update diet charts tailored to patient needs.</p>
            </div>
            <div className="feature">
              <h4>Inner Pantry Tasks</h4>
              <p>Organize and streamline pantry-related tasks for better efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h3>About Us</h3>
          <div className='divider'></div>
          <p>We aim to revolutionize hospital management with a user-friendly platform designed for efficiency and care.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat esse suscipit quisquam laboriosam, eaque commodi itaque maxime blanditiis culpa ea tempora delectus molestias iusto id in rerum nostrum quas libero?</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Hospital Management System. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
