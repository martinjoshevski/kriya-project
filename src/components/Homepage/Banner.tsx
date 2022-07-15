import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Banner() {
  return (
    <Container className="position-relative">
      <Row>
        <Col className="mt-5 pt-5" style={{ height: "460px" }}>
          <h1 className="display-2">GOOD HEALTH</h1>
          <h1
            className="display-3"
            style={{ fontWeight: 700, color: "#d73b8b" }}
          >
            FOR ALL
          </h1>
          <span>
            Where Innovation Meets Compassion for <br />
            Next-Gen Diagnostics
          </span>
        </Col>
        <Col className="d-none d-lg-block">
          <img
            className="mt-3 position-absolute"
            src="/images/homepage/hand.png"
            width="500px"
            alt="hand"
            height="auto"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
