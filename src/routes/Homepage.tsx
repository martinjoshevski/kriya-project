import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

function Homepage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("/images/homepage/pink-rectangle.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          backgroundSize: "cover",
        }}
      >
        <Navigation />
        <Container className="position-relative">
          <Row>
            <Col className="mt-5 pt-5" style={{ height: "460px" }}>
              <h1 className="display-2">GOOD HEALTH</h1>
              <h1 className="display-3">FOR ALL</h1>
              <span>
                Where Innovation Meets Compassion for <br />
                Next-Gen Diagnostics
              </span>
            </Col>
            <Col>
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
        <Row>
          <Col lg={3} xl={1} />
          <Col
            className="xs-p-0 p-5"
            style={{
              backgroundImage: `url("/images/homepage/blue-rectangle.png")`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundSize: "cover",
            }}
          >
            <Row>
              <h1 className="pt-2 ">About Kriya</h1>
              <Col lg={6} className="p-2">
                <h3>
                  We’re Kriya Medical <br></br>Technologies, an innovative
                  <br /> MedTech company
                </h3>
                <br />
                <span>
                  Our mission is to transform the detection and <br /> treatment
                  of infectious diseases by way of data-led
                  <br /> diagnostics and medical devices. Since 2012, our
                  <br /> end-to-end solutions and data-driving insights have
                  <br /> advanced diagnostics and improved outcomes.
                </span>
              </Col>

              <Col lg={4} className="p-2">
                <p>
                  And through deep partnerships, diverse perspectives,
                  innovative devices, and digital solutions, we continue to
                  build connections across the continuum of diagnostics.
                </p>
                <br />
                <span>
                  By using novel technologies, state-of-the-art manufacturing
                  facilities, and a quality-by-design approach, we’re proud to
                  deliver world-class diagnostics to people globally, every
                  single day.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Homepage;
