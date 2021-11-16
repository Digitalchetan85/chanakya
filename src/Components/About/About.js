import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="">
            <h1 className="text-primary text-center">
              ಚಾಣಕ್ಯಕರಿಯರ್ ಅಕಾಡೆಮಿ,ಧಾರವಾಡ
            </h1>
            <h3 className="text-primary text-center">
              {" "}
              (IAS/KAS ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ತರಬೇತಿ ಕೇಂದ್ರ)
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
