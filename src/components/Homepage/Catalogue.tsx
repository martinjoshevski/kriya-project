import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function Catalogue() {
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
        backgroundImage: `url("/images/homepage/purple-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row className=" align-items-center align-content-center pt-5 pb-5">
          <Col lg={7} className="text-center">
            <h1 className="text-white font-weight-bold">
              Updated with many products
            </h1>
          </Col>
          <Col className="text-lg-start text-sm-center">
            <Button
              variant="danger"
              style={{
                backgroundColor: !isHoveringBackground ? "#fff" : "#d73b8b",
                color: !isHoveringBackground ? "#2b2b2b" : "#fff",
                boxShadow: !isHoveringBackground
                  ? ""
                  : "0px 0px 60px 6px rgba(215,59,140,0.25)",
                border: "none",
                fontSize: "12px",
                fontWeight: 600,
                height: "52px",
                width: "254px",
                borderRadius: 0,
                letterSpacing: "1px",
              }}
              onMouseEnter={handleMouseEnterBackground}
              onMouseLeave={handleMouseLeaveBackground}
            >
              Download Catalogue <AiOutlineArrowRight />
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Catalogue;
