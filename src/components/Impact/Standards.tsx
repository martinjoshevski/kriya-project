import { Col, Container, Row } from "react-bootstrap";

function Standards() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/impact/blue-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row>
          <Col md={1} sm={0} />
          <Col md={10} sm={12}>
            <h1
              className="pt-5 mt-5 pb-1 text-center"
              style={{ fontWeight: 700 }}
            >
              Holding ourselves to the highest standards
            </h1>
            <div
              className="mb-4 d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "826px",
              }}
            >
              {""}
            </div>
            <p className="text-center">
              We strictly follow internationally approved standards to design
              products and operate facilities. Our Quality Operating System
              (K-QOS) complies with{" "}
              <span style={{ color: "#ad4594", fontWeight: 700 }}>
                {" "}
                ISO 9001{" "}
              </span>
              QMS requirements and accepted GMP standards. Our facilities meet
              both US and Indian FDA guidelines. <br />
              <br />
              All our products are designed and validated by our stringent
              product requirement protocols and are registered with the Indian
              government FDA. They are also compliant for export and free sale.
              Furthermore, Kriyamed is certified to operate with a drug license.
            </p>
          </Col>
          <Col md={1} sm={0} />
        </Row>
        <Row>
          <Col md={2} sm={0} />
          <Col>
            <img
              src="/images/impact/ISO9001.png"
              alt="iso"
              className="img-fluid"
            />
          </Col>
          <Col md={2} sm={0} />
        </Row>
      </Container>
    </div>
  );
}

export default Standards;
