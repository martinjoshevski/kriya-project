import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
function GuidingLights() {
  const [active, setActive] = useState("first");
  return (
    <>
      <style type="text/css">
        {`
    .btn-purple-1 {
      background-color: #ad4594;
    
      color: white;
    }
    .btn-purple-1:hover {
      background-color: #ad4594;
      color: white;
    }
    .btn-teal-1 {
      background-color: #79bdb2;
    
      color: white;
    }
    .btn-teal-1:hover {
      background-color: #79bdb2;
      color: white;
    }
    .btn-pink-1 {
      background-color: #d83b8c;
    
      color: white;
    }
    .btn-pink-1:hover {
      background-color: #d83b8c;
      color: white;
    }
    .btn-gold-1 {
      background-color: #dab176;
    
      color: white;
    }
    .btn-gold-1:hover {
      background-color: #dab176;
      color: white;
    }
    
    `}
      </style>
      <div
        style={{
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Container className="pt-2 mt-2">
          <Row className="pt-5 mt-5 pb-5">
            <Col className="mt-5">
              <h1 className="w-sm-100 w-lg-75" style={{ fontWeight: 700 }}>
                The four guiding lights that lead us
              </h1>
              <div
                className="mb-4 d-none d-lg-block"
                style={{
                  borderBottom: "3px black solid",
                  width: "120px",
                  marginLeft: "96px",
                }}
              >
                {""}
              </div>

              <h6 className="w-sm-100 w-lg-75">
                Our digital{" "}
                <span style={{ fontWeight: "bolder" }}>“one-click” </span>{" "}
                platforms across the continuum of technicians and laboratory
                systems improve diagnostic outcomes.
              </h6>
              {active === "first" && (
                <>
                  <div className="w-75 pt-4">
                    <h4
                      className=" p-2 text-center"
                      style={{
                        width: "200px",
                        background: "#79bdb2",
                        color: "white",
                        letterSpacing: "3px",
                      }}
                    >
                      INNOVATION
                    </h4>
                    <h6
                      className="w-sm-100 w-lg-75 pt-2"
                      style={{ color: "2b2b2b" }}
                    >
                      Good health for all is possible only if healthcare is
                      affordable. This calls for a noble quest to challenge and
                      change the present. We strive to look at problems through
                      the lens of creativity based on the strong foundation of
                      knowledge.
                    </h6>
                  </div>
                </>
              )}
              {active === "second" && (
                <>
                  <div className="w-75 pt-4">
                    <h4
                      className=" p-2 text-center"
                      style={{
                        width: "200px",
                        background: "#d83b8c",
                        color: "white",
                        letterSpacing: "3px",
                      }}
                    >
                      INCLUSIVITY
                    </h4>
                    <h6
                      className="w-sm-100 w-lg-75 pt-2"
                      style={{ color: "2b2b2b" }}
                    >
                      Good health for all is possible only if healthcare is
                      affordable. This calls for a noble quest to challenge and
                      change the present. We strive to look at problems through
                      the lens of creativity based on the strong foundation of
                      knowledge.
                    </h6>
                  </div>
                </>
              )}
              {active === "third" && (
                <>
                  <div className="w-75 pt-4">
                    <h4
                      className=" p-2 text-center"
                      style={{
                        width: "200px",
                        background: "#ad4594",
                        color: "white",
                        letterSpacing: "3px",
                      }}
                    >
                      EMPATHY
                    </h4>
                    <h6
                      className="w-sm-100 w-lg-75 pt-2"
                      style={{ color: "2b2b2b" }}
                    >
                      Good health for all is possible only if healthcare is
                      affordable. This calls for a noble quest to challenge and
                      change the present. We strive to look at problems through
                      the lens of creativity based on the strong foundation of
                      knowledge.
                    </h6>
                  </div>
                </>
              )}
              {active === "fourth" && (
                <>
                  <div className="w-75 pt-4">
                    <h4
                      className=" p-2 text-center"
                      style={{
                        width: "200px",
                        background: "#dab176",
                        color: "white",
                        letterSpacing: "3px",
                      }}
                    >
                      PASSION
                    </h4>
                    <h6
                      className="w-sm-100 w-lg-75 pt-2"
                      style={{ color: "2b2b2b" }}
                    >
                      Good health for all is possible only if healthcare is
                      affordable. This calls for a noble quest to challenge and
                      change the present. We strive to look at problems through
                      the lens of creativity based on the strong foundation of
                      knowledge.
                    </h6>
                  </div>
                </>
              )}
            </Col>
            <Col
              lg={5}
              md={5}
              style={{
                backgroundRepeat: "no-repeat",
                width: "530px",
                height: "500px",
                objectFit: "contain",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/about/globus.png"
                alt=""
                className="img-fluid position-absolute "
                style={{ zIndex: 1 }}
              />
              <Row>
                <Col
                  className="position-relative overflow-hidden"
                  style={{ zIndex: 1 }}
                >
                  {" "}
                  <div style={{ marginTop: "44%", marginLeft: "40%" }}>
                    <Button
                      variant="teal-1"
                      onClick={() => {
                        setActive("first");
                      }}
                    >
                      INNOVATION
                    </Button>
                  </div>
                  <div style={{ marginTop: "6%", marginLeft: "74%" }}>
                    <Button
                      variant="pink-1"
                      onClick={() => {
                        setActive("second");
                      }}
                    >
                      INCLUSIVITY
                    </Button>
                  </div>
                  <div
                    style={{ marginTop: "6%", marginLeft: "13%" }}
                    onClick={() => {
                      setActive("third");
                    }}
                  >
                    <Button variant="purple-1">EMPATHY</Button>
                  </div>
                  <div
                    style={{ marginTop: "6%", marginLeft: "51%" }}
                    onClick={() => {
                      setActive("fourth");
                    }}
                  >
                    <Button variant="gold-1">PASSION</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <img
        src="/images/homepage/stars.png"
        alt="stars"
        className="d-none d-lg-block"
      />
    </>
  );
}

export default GuidingLights;
