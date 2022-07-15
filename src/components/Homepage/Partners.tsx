import { Col, Container, Row } from "react-bootstrap";

function Partners() {
  return (
    <Container className="w-75 mt-5 pt-5 mb-5 pb-5 d-none d-lg-block">
      <Row
        style={{ filter: "grayscale(100%)" }}
        className="d-flex justify-content-center align-baseline text-center"
      >
        <Col>
          <img src="/images/homepage/partner1.png" alt="" />
        </Col>
        <Col>
          <img src="/images/homepage/partner2.png" alt="" />
        </Col>
        <Col>
          <img src="/images/homepage/partner3.png" alt="" />
        </Col>
        <Col>
          <img src="/images/homepage/partner4.png" alt="" />
        </Col>
        <Col className="mt-4">
          <img src="/images/homepage/partner5.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;
