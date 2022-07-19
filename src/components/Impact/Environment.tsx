import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";
function Environment() {
  const [active, setActive] = useState("people");
  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="mb-5 pb-5">
        <Row>
          <Col md={1} sm={0} />
          <Col md={10} sm={12}>
            <h1
              className="pt-5 mt-5 pb-1 text-center"
              style={{ fontWeight: 700 }}
            >
              Prioritizing environmental sustainability
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
              We take sustainability seriously. Healthy people require healthy
              environments — one where social determinants of health are
              optimized in terms of footprint. Kriyamed’s sustainability promise
              extends to every aspect of our people and processes.
            </p>
          </Col>
          <Col md={1} sm={0} />
        </Row>
        <Row>
          <Col md={2} sm={2} />
          <Col
            md={2}
            sm={2}
            className="text-center"
            style={{ marginRight: "1rem" }}
          >
            <Button
              variant="none"
              className="mt-2 text-start"
              onClick={() => {
                setActive("people");
              }}
              style={{
                background: `${active === "people" ? "#f0b76c" : "white"}`,
                color: `${active === "people" ? "white" : "#2b2b2b"}`,
                borderRadius: 0,
                border: "none",
                outline: "none",
                boxShadow: "none",
                fontWeight: 500,
              }}
            >
              <div style={{ width: "105.92px" }}>
                <BsPeople size={22} style={{ marginRight: "5px" }} />
                PEOPLE
              </div>
            </Button>
            <br />
            <Button
              className="mt-2 mb-4"
              onClick={() => {
                setActive("process");
              }}
              style={{
                background: `${active === "process" ? "#f0b76c" : "white"}`,
                color: `${active === "process" ? "white" : "#2b2b2b"}`,
                borderRadius: 0,
                border: "none",
                outline: "none",
                boxShadow: "none",
                fontWeight: 500,
              }}
            >
              <div className="d-flex text-start" style={{ width: "105.92px" }}>
                <img
                  src="/images/impact/settings.png"
                  alt="w"
                  width={22}
                  style={{
                    filter: `${
                      active === "process"
                        ? "brightness(0) invert(1)"
                        : "brightness(0%)"
                    }`,
                    marginRight: "5px",
                  }}
                />
                PROCESS
              </div>
            </Button>
          </Col>
          <Col md={6} sm={6} style={{ height: "170px" }} className="mt-1">
            <div style={{ backgroundColor: "#f8f7f7", padding: "1rem" }}>
              {active === "people" && (
                <>
                  <p>
                    We educate and encourage our collaborators to adopt
                    environmentally sustainable practices. We are also committed
                    to making our supply chain more mindful, focusing on the
                    responsible sourcing, building, use, and disposal of our
                    products.
                  </p>
                </>
              )}
              {active === "process" && (
                <>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti ipsum, dignissimos nostrum expedita sed, officiis
                    voluptates suscipit ea maiores animi dolorum sunt neque
                    culpa fuga adipisci impedit quos vel? Pariatur?
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src="/images/homepage/stars.png"
        alt="stars"
        className="d-none d-lg-block"
      />
    </div>
  );
}

export default Environment;
