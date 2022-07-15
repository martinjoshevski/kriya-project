import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
function Covid() {
  const [isHoveringBackground, setIsHoveringBackground] = useState(false);

  const handleMouseEnterBackground = () => {
    setIsHoveringBackground(true);
  };

  const handleMouseLeaveBackground = () => {
    setIsHoveringBackground(false);
  };
  return (
    <div
      style={{
        backgroundImage: `url("/images/homepage/covid-19.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-2 mt-2">
        <Row className="pt-5 mt-5 pb-5">
          <Col lg={6} md={6}>
            <img
              src="/images/homepage/krivida.png"
              alt="krivida"
              width="100%"
              className="img-fluid"
            />
          </Col>
          <Col>
            <h1 className="pt-2 pb-1" style={{ fontWeight: 700 }}>
              Our COVID-19 Response
            </h1>
            <div
              className="mb-4 d-none d-lg-block"
              style={{
                borderBottom: "3px black solid",
                width: "120px",
                marginLeft: "400px",
              }}
            >
              {""}
            </div>

            <h6 className="w-75">
              As the COVID-19 pandemic evolved, an immediate, pressing need
              arose to create newer methods for detecting variants, like
              omicron. Rising to the challenge, Kriya—with its in-house
              expertise—developed innovative, safe, affordable, and reliable
              solutions for sample collection and variant testing.
            </h6>
            <div>
              {" "}
              <h6 className="w-75">
                {" "}
                Our KRIVIDA Novus SARS-CoV-2 Kit, a real-time PCR testing kit,
                can detect positive COVID-19 cases, differentiate the type of
                strain contracted, and identify new COVID-19 strains.
              </h6>
              <Button
                variant="danger"
                style={{
                  backgroundColor: !isHoveringBackground
                    ? "#202020"
                    : "#d73b8b",
                  boxShadow: !isHoveringBackground
                    ? ""
                    : "0px 0px 60px 6px rgba(215,59,140,0.25)",
                  border: "none",
                  fontSize: "12px",
                  fontWeight: 600,
                  height: "52px",
                  width: "154px",
                  borderRadius: 0,
                  letterSpacing: "1px",
                }}
                onMouseEnter={handleMouseEnterBackground}
                onMouseLeave={handleMouseLeaveBackground}
              >
                READ MORE <AiOutlineArrowRight />
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Covid;
