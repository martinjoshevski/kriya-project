import { Col, Container, Row } from "react-bootstrap";

function Women() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/career/woman.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-2 mt-2">
        <Row className="pt-2 mt-2">
          <Col lg={6} md={6} />
          <Col className="mt-2">
            <h1 className="pt-5 mt-5 pb-1" style={{ fontWeight: 700 }}>
              Our commitment: Enabling women in STEM
            </h1>
            <div
              className="mb-4 d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "226px",
              }}
            >
              {""}
            </div>
            <h5 className="text-uppercase" style={{ letterSpacing: "3px" }}>
              did you know?
            </h5>
            <div className="d-flex">
              <span style={{ fontSize: "72px", color: "#d83b8c" }}>43%</span>
              <p className="text-start mt-3" style={{ marginLeft: "1rem" }}>
                of STEM <br />
                graduates in <br />
                India are women
              </p>
            </div>
            <div className="d-flex" style={{ marginLeft: "1rem" }}>
              <span style={{ fontSize: "72px", color: "#d83b8c" }}>14%</span>
              <p className="text-start mt-3" style={{ marginLeft: "1rem" }}>
                of people
                <br /> employed in
                <br /> STEM jobs are
                <br /> women
              </p>
            </div>
            <p className="mb-5 pb-5">
              While better healthcare is Kriya’s primary objective, we are also
              dedicated and passionate about bridging gender employment gaps. We
              encourage the growth of women at all levels of the organisation by
              offering flexi-work options and promoting continuous learning
              opportunities.
              <br />
              <br />
              At Kriya, we believe in offering women the necessary resources and
              opportunities to thrive and fuel their passions by extending our
              unwavering support. Our goal is to build a more inclusive and
              equitable workplace to ensure holistic growth and transformation.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Women;
