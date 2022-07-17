import { Col, Container, Row } from "react-bootstrap";

function Quality() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/about/purple-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-2 mt-2">
        <Row>
          <Col md={1} sm={0} />
          <Col md={10} sm={12}>
            <h1
              className="pt-5 mt-5 pb-1 text-center"
              style={{ fontWeight: 700 }}
            >
              Quality healthcare affordable for all
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
              Driven by innovation, we explore new ways to solve old problems
              and push boundaries to build products of the highest quality. We
              exist to pioneer breakthrough thinking and create cutting-edge
              products that can make healthcare accessible and affordable.{" "}
            </p>
          </Col>
          <Col md={1} sm={0} />
        </Row>

        <Row className="pt-5 mt-5 pb-5">
          <Col lg={8} md={8}>
            <img
              src="/images/about/telescope.png"
              alt="laptop"
              width="100%"
              className="img-fluid"
            />
          </Col>
          <Col className="mt-5">
            <h1
              className="pt-5 mt-5 pb-1 w-sm-100 w-lg-75"
              style={{ fontWeight: 700 }}
            >
              Creating a healthy world
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

            <h6 className="w-sm-100 w-lg-75 text-sm-center text-lg-start">
              We believe that only when every section of our society can get
              access to quality healthcare, can we dream of such a world. And we
              keep our vision at the forefront of every endeavor.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quality;
