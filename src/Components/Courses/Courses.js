import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="text-center">
            <h2 className="text-primary fw-bold pt-2 pb-2">ಕೋರ್ಸ್‌ಗಳ ಮಾಹಿತಿ</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-primary text-white">
            <h2>KAS</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-secondary text-white">
            <h2>PSI</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-info text-white">
            <h2>FDA</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-success text-white">
            <h2>SDA</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-danger text-white">
            <h2>PDO</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-info text-white">
            <h2>TET</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-secondary text-white">
            <h2>POLICE</h2>
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center p-3 m-1 bg-primary text-white">
            <h2>RRB</h2>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="text-center m-3 ">
            <a className="btn btn-primary text-uppercase fw-bold" href="#">
              Click here to join
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
