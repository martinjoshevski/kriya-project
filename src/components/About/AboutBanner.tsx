import { Col, Container, Row } from "react-bootstrap";

function AboutBanner() {
  return (
    <Container className="position-relative mb-5">
      <Row>
        <Col md={6} className="mt-5 pt-5">
          <h1 className="display-4">What’s the</h1>
          <h1 className="display-5" style={{ fontWeight: 700 }}>
            Kriya Med story?
          </h1>
          <span>Learn what drives our purpose, vision, and values.</span>
        </Col>
        <Col md={6} className="text-center">
          <img
            className="mt-3 img-fluid"
            src="/images/about/hands.png"
            width="600px"
            alt="hand"
            height="auto"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutBanner;
