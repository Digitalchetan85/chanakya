import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import aboutImage from "../../Images/director.png";
import karnataka from "../../Images/karnataka.png";

const About = () => {
  return (
    <>
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="p-3">
                <h1 className="text-white text-center fw-bold">
                  ಚಾಣಕ್ಯ ಕರಿಯರ್ ಅಕಾಡೆಮಿ, ಧಾರವಾಡ & ಹೋಸಪೇಟೆ
                </h1>
                <h3 className="text-white text-center fw-bold">
                  {" "}
                  (IAS/KAS ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ತರಬೇತಿ ಕೇಂದ್ರ)
                </h3>
                <Row className="justify-content-center">
                  <Col md={4}>
                    <h4 className="side-line text-center">
                      <span className="line">
                        <i className="fas fa-book-reader"></i>
                      </span>
                    </h4>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-3 pb-md-3 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <div className="border border-danger border-2 rounded shadow bg-white">
                <div className="text-center pt-2 pb-2">
                  <h4 className="pt-2 pb-2 text-primary fw-bold">
                    KAS/PSI ಉಚಿತ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆ ತರಬೇತಿ ಪ್ರಾರಂಭ
                  </h4>

                  <Row className="">
                    <Col md={4} className="align-self-center">
                      <div className="text-center">
                        <Image
                          src={karnataka}
                          alt="image"
                          className="img-fluid rounded"
                        />
                      </div>
                    </Col>
                    <Col md={8} className="align-self-center">
                      <div className="bg-warning text-danger p-3 fw-bold rounded">
                        <p>
                          ಕರ್ನಾಟಕ ರಾಜ್ಯೋತ್ಸವ ಪ್ರಯುಕ್ತವಾಗಿ 100 ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ
                          ವಿಜಯನಗರ ಜಿಲ್ಲೆ ಹೋಸಪೇಟೆ ನಗರದಲ್ಲಿ ಮಾದರಿ ಸ್ಪರ್ಧಾತ್ಮಕ
                          ಪರೀಕ್ಷೆಯ ಮೂಲಕ ಉಚಿತ ತರಬೇತಿ ನೀಡಲಾಗುತ್ತದೆ ಸ್ಪರ್ಧಾತ್ಮಕ
                          ಪರೀಕ್ಷೆಗೆ ಯಾವುದೇ ಪ್ರವೇಶ ಶುಲ್ಕವಿರುವದಿಲ್ಲ.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bg-info">
                  <Row>
                    <Col md={12}>
                      <div className="p-3">
                        <p className="fw-bold text-white text-center">
                          ಹೆಸರು ನೊಂದಾಯಿಸುವ ದಿನಾಂಕ: 11-11-2021
                        </p>
                        <p className="fw-bold text-white text-center">
                          ಕೊನೆಯ ದಿನಾಂಕ : 20-11-2021
                        </p>
                      </div>
                      <div className="text-center mb-2">
                        <a
                          className="btn btn-primary text-uppercase fw-bold"
                          href="https://t.me/Chanakyacareeracademy_Dharwad"
                        >
                          Click here to join
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bg-warning">
                  <Row>
                    <Col md={12}>
                      <div className="p-3">
                        <p className="fw-bold text-danger text-center">
                          ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆ ನಡೆಯುವ ದಿನಾಂಕ :21-11-2021
                        </p>
                        <p className="fw-bold text-danger text-center">
                          ಸಮಯ ಬೆಳಗ್ಗೆ : 10:30am
                        </p>
                        <p className="fw-bold text-danger text-center">
                          ಸ್ಥಳ : ಕೆ ಆರ್ ಕೆ ಬಿಲ್ಡಿಂಗ್, ರೈಲ್ವೆ ಸ್ಟೇಷನ್ ರಸ್ತೆ,
                          ಹೋಸಪೇಟೆ
                        </p>
                        <p className="fw-bold text-danger text-center">
                          Ph:8792828153 / 8792828154 / 9686153725
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bg-danger">
                  <Row>
                    <Col md={12}>
                      <div className="p-3">
                        <p className="fw-bold text-white text-center">
                          ವಿಶೇಷ ಸೂಚನೆ: ತರಬೇತಿಯಲ್ಲಿ ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ಜೆಲ್ಲೆ
                          ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ 70% ಮೀಸಲಾತಿ ಉಳಿದ ಜಿಲ್ಲೆಗಳಿಗೆ 30%
                          ಮೀಸಲಾತಿ ಇದರಲ್ಲಿ ಮಹಿಳೆಯರಿಗೆ 50% ಮೀಸಲಾತಿ ನೀಡಲಾಗುತ್ತದೆ
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <Image
                  src={aboutImage}
                  alt="about"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
