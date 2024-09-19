import React, { useState } from 'react';
import { Modal, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>
        Contact Us
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>For any inquiries, please call us at:</p>
          <p>UK: 0161 217 1517</p>
        </Modal.Body>
        <Modal.Footer>
          <Nav.Link onClick={handleClose}>
            OK
          </Nav.Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUs;
