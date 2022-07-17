import { Col, Container, Row } from "react-bootstrap";

function Founder() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/about/founder-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-2 mt-2">
        <Row className="pt-5 mt-5">
          <Col lg={6} md={6}>
            <img
              src="/images/about/people.png"
              alt="laptop"
              width="100%"
              className="img-fluid"
            />
          </Col>
          <Col className="mt-5">
            <h1 className="pt-5 mt-5 pb-1" style={{ fontWeight: 700 }}>
              A note from Founder
            </h1>
            <div
              className="mb-4 d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "326px",
              }}
            >
              {""}
            </div>

            <h6 className="w-sm-100 w-lg-75">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. <br /> Lorem ipsum
              may be used as a placeholder before the final copy is available.
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </h6>
            <h6 style={{ color: "#ad4594", fontWeight: 600 }}>
              - Mr.William Sen & Mrs. Joan William
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Founder;
