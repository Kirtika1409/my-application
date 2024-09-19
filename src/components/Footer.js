import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-4" style={{backgroundColor: "#e9ecef"}}>
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
              <p className="footer-text"><a href="mailto:info@example.com">info@volcanic.com</a></p>
            </div>
          </Col>
          <Col md={3} className="footer-item">
            <div className="footer-content">
              <h5 className='footer-heading'><FaPhone className='footer-icon' /> Get in Touch</h5>
              <p className="footer-text"><a href="tel:+1234567890">UK: 0161 217 1517</a></p>
            </div>
          </Col>
          <Col md={3} className="footer-item">
            <div className="footer-content">
              <h5 className='footer-heading'><FaMapMarkerAlt className='footer-icon' /> Find Us</h5>
              <p className="footer-text">Dale House Floor 8, Tiviot Dale, Stockport, SK1 1TB</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
