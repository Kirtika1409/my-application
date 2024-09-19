// src/components/ContactUs.js
import React, { useState } from 'react';
import { Modal, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 

const Joinus = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>
        Join Us
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join Us Now!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Browse here for more opportunities...
          <br />
            <Link to="/jobs" onClick={handleClose}>
              View Jobs
            </Link>
          </p>
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

export default Joinus;
