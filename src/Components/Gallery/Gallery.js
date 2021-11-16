import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from '../../Images/Gallery/image-1.png';
import image2 from '../../Images/Gallery/image-2.png';

const Gallery = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="text-center">
              <Image class="img-fluid rounded shadow-sm" src={image1} alt="galery" />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image class="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
