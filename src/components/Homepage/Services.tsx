import { Col, Container, Row } from "react-bootstrap";

function Services() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/homepage/laptop-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-2 mt-2">
        <Row className="pt-5 mt-5 pb-5">
          <Col lg={8} md={8}>
            <img
              src="/images/homepage/laptop.png"
              alt="laptop"
              width="100%"
              className="img-fluid"
            />
          </Col>
          <Col className="mt-5">
            <h1 className="pt-5 mt-5 pb-1" style={{ fontWeight: 700 }}>
              Our Services
            </h1>
            <div
              className="mb-4 d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "166px",
              }}
            >
              {""}
            </div>

            <h6 className="w-75">
              Our digital{" "}
              <span style={{ fontWeight: "bolder" }}>“one-click” </span>{" "}
              platforms across the continuum of technicians and laboratory
              systems improve diagnostic outcomes.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
