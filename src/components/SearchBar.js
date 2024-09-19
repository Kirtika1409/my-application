import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Row className="justify-content-center my-5">
      <Col md={8}>
        <Form>
          <Row>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Search for jobs..." />
            </Col>
            <Col sm={2}>
              <Button variant="primary" type="submit" className="w-100">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchBar;
