import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section bg-light py-4">
      <Container>
        <Row>
          <Col md={3} className="footer-item">
            <h5 className='get-social'>Get Social</h5>
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
            </div>
          </Col>
          <Col md={3} className="footer-item">
            <div className="footer-content">
              <h5 className='footer-heading'><FaEnvelope className='footer-icon' /> Email Us</h5>
              <p className="footer-text"><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </Col>
          <Col md={3} className="footer-item">
            <div className="footer-content">
              <h5 className='footer-heading'><FaPhone className='footer-icon' /> Get in Touch</h5>
              <p className="footer-text"><a href="tel:+1234567890">+123 456 7890</a></p>
            </div>
          </Col>
          <Col md={3} className="footer-item">
            <div className="footer-content">
              <h5 className='footer-heading'><FaMapMarkerAlt className='footer-icon' /> Find Us</h5>
              <p className="footer-text">1234 Job Street, City, Country</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
