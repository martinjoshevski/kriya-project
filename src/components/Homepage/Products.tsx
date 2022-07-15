import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function Products() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHoveringBackground, setIsHoveringBackground] = useState(false);
  const [isHoveringBackground1, setIsHoveringBackground1] = useState(false);
  const [isHoveringBackground2, setIsHoveringBackground2] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };
  const handleMouseEnterBackground = () => {
    setIsHoveringBackground(true);
  };

  const handleMouseLeaveBackground = () => {
    setIsHoveringBackground(false);
  };
  const handleMouseEnterBackground1 = () => {
    setIsHoveringBackground1(true);
  };

  const handleMouseLeaveBackground1 = () => {
    setIsHoveringBackground1(false);
  };
  const handleMouseEnterBackground2 = () => {
    setIsHoveringBackground2(true);
  };

  const handleMouseLeaveBackground2 = () => {
    setIsHoveringBackground2(false);
  };
  return (
    <>
      <Container className="text-left mt-5 mb-5 w-75">
        <Row>
          <Col />
          <Col>
            <div className="mb-5">
              <h1 className="pt-2 pb-1 text-center" style={{ fontWeight: 700 }}>
                Our Products
              </h1>
              <div
                className="d-none d-lg-block"
                style={{
                  borderBottom: "3px black solid",
                  width: "120px",
                  marginLeft: "260px",
                }}
              >
                {""}
              </div>
            </div>
          </Col>
          <Col />
        </Row>

        <Row className="mb-5">
          <Col className="mt-5">
            <img src="/images/homepage/01.png" alt="01" />
            <h3
              className="mt-2"
              style={{
                fontWeight: 600,
                color: !isHovering ? "#202020" : "#d73b8b",
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Biological Sample Collection and Transportation
            </h3>
            <p>
              Our bio collection and transport devices are integrated with
              digital platforms, enhancing the clinical laboratory workflow into
              an end-to-end, fully automated process. Kriya offers vacuum and
              non-vacuum blood collection tubes, safe blood-collection needles,
              and safe closed urine sample collection kits, plus
              temperature-controlled smart sample transport devices.
            </p>
            <Button
              variant="danger"
              style={{
                backgroundColor: !isHoveringBackground ? "#202020" : "#d73b8b",
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
          </Col>
          <Col className="mt-3 text-center  d-none d-lg-block">
            <img
              src="/images/homepage/eprouvette.png"
              alt="e"
              className="text-center"
            />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col
            className="mt-3 text-center d-none d-lg-block"
            xs={{ order: 2 }}
            lg={{ order: 1 }}
          >
            <img
              className="text-center"
              src="/images/homepage/jar.png"
              alt=""
            />
          </Col>
          <Col className="mt-5" xs={{ order: 1 }} lg={{ order: 2 }}>
            <img src="/images/homepage/02.png" alt="01" />
            <h3
              className="mt-2"
              style={{
                fontWeight: 600,
                color: !isHovering1 ? "#202020" : "#d73b8b",
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Molecular Diagnostics
            </h3>
            <p>
              We provide molecular diagnostics solutions that use innovative
              technologies to respond to needs presented by the COVID-19
              pandemic. Our extraction-free MTM swab and saliva collection
              transport kits enable safe and accurate at-home collection for
              RT-PCR testing. Our COVID-19 RT-PCR kits detect the omicron
              variant, deltacron variant, and newer strains,{" "}
              <span
                style={{
                  color: "#d73b8b",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                READ MORE
              </span>
            </p>
            <Button
              variant="danger"
              style={{
                backgroundColor: !isHoveringBackground1 ? "#202020" : "#d73b8b",
                boxShadow: !isHoveringBackground1
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
              onMouseEnter={handleMouseEnterBackground1}
              onMouseLeave={handleMouseLeaveBackground1}
            >
              Explore More <AiOutlineArrowRight />
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col
            className="mt-3 text-center d-none d-lg-block"
            xs={{ order: 2 }}
            lg={{ order: 2 }}
          >
            <img
              className="text-center "
              src="/images/homepage/monitor.png"
              alt=""
            />
          </Col>
          <Col className="mt-5" xs={{ order: 1 }} lg={{ order: 1 }}>
            <img src="/images/homepage/03.png" alt="01" />
            <h3
              className="mt-2"
              style={{
                fontWeight: 600,
                color: !isHovering2 ? "#202020" : "#d73b8b",
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Diabetes Care
            </h3>
            <p>
              To monitor and manage diabetes, we offer total advanced care
              solutions, including our POC and POCT products, which enable
              accurate in-home diabetes testing: KRIOSE Rightest®, a blood
              glucose monitor with patent-pending strips, and Clinchem, an
              advanced analyzer that measures HbA1c, CRP, glucose content, and
              haemoglobin in the blood. We also provide a range of insulin
              syringes and insulin pen needles that minimise pain, improve
              patient experience, and enhance diabetes management.{" "}
            </p>
            <Button
              variant="danger"
              style={{
                backgroundColor: !isHoveringBackground2 ? "#202020" : "#d73b8b",
                boxShadow: !isHoveringBackground2
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
              onMouseEnter={handleMouseEnterBackground2}
              onMouseLeave={handleMouseLeaveBackground2}
            >
              Explore More <AiOutlineArrowRight />
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <img
        src="/images/homepage/stars.png"
        alt="stars"
        className="d-none d-lg-block"
      />
    </>
  );
}

export default Products;
