import { Col, Container, Row } from "react-bootstrap";

function Healthcare() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/impact/purple-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-2 mt-2">
        <Row className="pt-5 mt-5">
          <Col lg={1} md={1} />
          <Col lg={4} md={4}>
            <img
              src="/images/impact/heart-2.png"
              alt="laptop"
              width="100%"
              className="img-fluid"
            />
          </Col>

          <Col className="mt-5 text-white" lg={5} md={5}>
            <h1 className=" pb-1" style={{ fontWeight: 700 }}>
              Making accessible healthcare a reality
            </h1>
            <div
              className="mb-4 d-none d-lg-block"
              style={{
                borderBottom: "3px white solid",
                width: "120px",
                marginLeft: "326px",
              }}
            >
              {""}
            </div>

            <h6 className="w-sm-100 w-lg-75">
              Our mission{" "}
              <span style={{ color: "#f0b76c", fontWeight: 600 }}>
                – good health for all –
              </span>{" "}
              guides us in our endeavor to develop innovative, cutting-edge, and
              affordable products that reach underserved markets and vulnerable
              populations burdened by diabetes, cancer, and cardiac
              complications.
              <br />
              <br />
              At Kriyamed, we are driven by deep science, technical expertise,
              and frugal engineering.
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

export default Healthcare;
