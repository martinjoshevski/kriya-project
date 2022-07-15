import { Col, Container, Row } from "react-bootstrap";

function Global() {
  return (
    <Container className="text-center mt-5 mb-5">
      <Row>
        <Col />
        <Col>
          <div className="mb-5">
            <h1 className="pt-2 pb-1" style={{ fontWeight: 700 }}>
              Our Global Footprint
            </h1>
            <div
              className="d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "360px",
              }}
            >
              {""}
            </div>
          </div>
        </Col>
        <Col />
      </Row>

      <Row>
        <Col
          xs={12}
          lg={3}
          className="d-flex flex-column text-align-center justify-content-center align-items-center"
        >
          <img
            className="mb-4"
            src="/images/homepage/love.png"
            alt="love"
            width={94}
            height={94}
          />
          <img
            src="/images/homepage/60M.png"
            alt="60M"
            width={101}
            height={40}
          />
          <div
            className="my-3"
            style={{
              borderBottom: "3px #d83b8c solid",
              width: "40px",
            }}
          >
            {""}
          </div>
          <p style={{ color: "#2b2b2b" }}>
            Patient Lives <br /> touched
          </p>
        </Col>
        <Col
          xs={12}
          lg={3}
          className="d-flex flex-column text-align-center justify-content-center align-items-center"
        >
          <img
            className="mb-4"
            src="/images/homepage/microscope.png"
            alt="love"
            width={94}
            height={94}
          />
          <img
            src="/images/homepage/300M.png"
            alt="60M"
            width={131}
            height={40}
          />
          <div
            className="my-3"
            style={{
              borderBottom: "3px #d83b8c solid",
              width: "40px",
            }}
          >
            {""}
          </div>
          <p style={{ color: "#2b2b2b" }}>
            Pathology tests
            <br /> enabled
          </p>
        </Col>
        <Col
          xs={12}
          lg={3}
          className="d-flex flex-column text-align-center justify-content-center align-items-center"
        >
          <img
            className="mb-4"
            src="/images/homepage/nostril.png"
            alt="love"
            width={94}
            height={94}
          />
          <img src="/images/homepage/3M.png" alt="60M" width={71} height={40} />
          <div
            className="my-3"
            style={{
              borderBottom: "3px #d83b8c solid",
              width: "40px",
            }}
          >
            {""}
          </div>
          <p style={{ color: "#2b2b2b" }}>
            COVID-19 tests
            <br /> facilitated
          </p>
        </Col>
        <Col
          xs={12}
          lg={3}
          className="d-flex flex-column text-align-center justify-content-center align-items-center"
        >
          <img
            className="mb-4"
            src="/images/homepage/machinery.png"
            alt="love"
            width={94}
            height={94}
          />
          <img
            src="/images/homepage/360M.png"
            alt="60M"
            width={131}
            height={40}
          />
          <div
            className="my-3"
            style={{
              borderBottom: "3px #d83b8c solid",
              width: "40px",
            }}
          >
            {""}
          </div>
          <p style={{ color: "#2b2b2b" }}>
            Devices manufactured
            <br /> annually
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Global;
