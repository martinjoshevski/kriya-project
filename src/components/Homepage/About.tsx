import { Col, Row } from "react-bootstrap";

function About() {
  return (
    <Row style={{ marginRight: "0px" }}>
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
          <div className="pb-1">
            <h1 className="pt-2 pb-1" style={{ fontWeight: 700 }}>
              About Kriya
            </h1>
            <div
              className="d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "160px",
              }}
            >
              {""}
            </div>
          </div>
          <Col lg={6} className="p-2">
            <h3 className="pt-3" style={{ color: "#d73b8b", fontWeight: 700 }}>
              We’re Kriya Medical <br></br>Technologies, an innovative
              <br /> MedTech company
            </h3>
            <br />
            <span>
              Our mission is to transform the detection and <br /> treatment of
              infectious diseases by way of data-led
              <br /> diagnostics and medical devices. Since 2012, our
              <br /> end-to-end solutions and data-driving insights have
              <br /> advanced diagnostics and improved outcomes.
            </span>
          </Col>

          <Col lg={4} className="p-2 pt-3">
            <p>
              And through deep partnerships, diverse perspectives, innovative
              devices, and digital solutions, we continue to build connections
              across the continuum of diagnostics.
            </p>
            <br />
            <span>
              By using novel technologies, state-of-the-art manufacturing
              facilities, and a quality-by-design approach, we’re proud to
              deliver world-class diagnostics to people globally, every single
              day.
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default About;
