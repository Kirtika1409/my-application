import { Modal, Nav } from "react-bootstrap";

const JobAppliedModel = ({ apply, handleClose }) => {
  return (
    <Modal show={apply} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have applied for the job!</p>
      </Modal.Body>
      <Modal.Footer>
        <Nav.Link onClick={handleClose}>OK</Nav.Link>
      </Modal.Footer>
    </Modal>
  );
};

export default JobAppliedModel;
