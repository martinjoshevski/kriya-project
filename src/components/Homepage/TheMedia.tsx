import { Col, Container, Row } from "react-bootstrap";

function TheMedia() {
  return (
    <Container className="w-75 d-none d-lg-block">
      <Row>
        <Col xs={4}>
          <h1 className="pt-5 mt-5" style={{ fontWeight: 700 }}>
            In the Media
          </h1>
          <div
            className="d-none d-lg-block"
            style={{
              borderBottom: "3px black solid",
              width: "120px",
              marginLeft: "190px",
            }}
          >
            {""}
          </div>
        </Col>

        <Col xs={4}>
          <img
            src="/images/homepage/et.png"
            alt="et"
            className="img-fluid"
            width="100%"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col xs={4}>
          <img
            src="/images/homepage/yourstory.png"
            alt="st"
            className="img-fluid"
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TheMedia;
