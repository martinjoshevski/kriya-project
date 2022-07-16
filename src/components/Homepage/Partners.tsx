import { Col, Container, Row } from "react-bootstrap";

function Partners() {
  return (
    <Container className="mt-5 pt-5 mb-5 pb-5 d-none d-lg-block">
      <Row
        style={{ filter: "grayscale(100%)" }}
        className="d-flex justify-content-center align-baseline text-center"
      >
        <Col xs={0} sm={1} />
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
        <Col xs={0} sm={1} />
      </Row>
    </Container>
  );
}

export default Partners;
