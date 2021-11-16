import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={4}>
            <h4 className="side-line text-center">
              <span className="line">
                <i className="fas fa-book-reader"></i>
              </span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="text-center p-2 bg-dark rounded shadow">
              <h4 className="text-primary">ಚಾಣಕ್ಯ ಕರಿಯರ್ ಅಕಾಡೆಮಿ, ಧಾರವಾಡ</h4>
              <p className="lh-base text-white">
                Jaynagar, 1<sup>st</sup> Cross, Saptapur
                <br /> Dharwad - 580 001
              </p>
              <p className="lh-base text-white">
                Phone: +91 9686153725 <br /> Phone: +91 8147457579 <br /> Phone:
                +91 9900180579
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center p-2 bg-dark rounded shadow">
              <h4 className="text-primary">ಚಾಣಕ್ಯ ಕರಿಯರ್ ಅಕಾಡೆಮಿ, ಹೋಸಪೇಟೆ</h4>
              <p className="lh-base text-white">
                KRK Building, Railway Station Road, Opp. to Uttaradimath
                <br /> Hospet - 583 201
              </p>
              <p className="lh-base text-white">
                Phone: +91 9686153725 <br /> Phone: +91 8147457579 <br /> Phone:
                +91 9900180579
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
