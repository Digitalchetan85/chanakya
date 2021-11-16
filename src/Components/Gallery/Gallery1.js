import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from '../../Images/Gallery/image-3.png';
import image2 from '../../Images/Gallery/image-4.png';
import image3 from '../../Images/Gallery/image-5.png';
import image4 from '../../Images/Gallery/image-6.png';
import image5 from '../../Images/Gallery/image-7.png';
import image6 from '../../Images/Gallery/image-8.png';
import image7 from '../../Images/Gallery/image-9.png';
import image8 from '../../Images/Gallery/image-10.png';

const Gallery1 = () => {
  return (
    <div>
      <Container>
          <h2 className="text-center text-primary pt-2 pb-2">Gallery</h2>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image1} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image3} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image7} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image5} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image6} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image4} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-1">
              <Image className="img-fluid rounded shadow-sm" src={image8} alt="galery" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery1;
