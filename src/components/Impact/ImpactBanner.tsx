import { Col, Container, Row } from "react-bootstrap";

function ImpactBanner() {
  return (
    <Container className="position-relative mb-5">
      <Row>
        <Col md={6} className="mt-5 pt-5 text-uppercase ">
          <h1 className="display-5">
            Our approach to healthcare is driven by three promises:
          </h1>
          <h1 style={{ fontWeight: 700 }} className="w-50">
            affordability, sustainability, and safety
          </h1>
        </Col>

        <Col md={6} className="text-left">
          <img
            className="mt-3 img-fluid"
            src="/images/impact/lamb.png"
            alt="hand"
            height="auto"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ImpactBanner;
