import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function CareerBanner() {
  return (
    <>
      <style type="text/css">
        {`
 .btn-pink-1 {
  background-color: #d83b8c;

  color: white;
}
.btn-pink-1:hover {
  background-color: #d83b8c;
  box-shadow: 0px 0px 60px 6px rgba(215,59,140,0.25);
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
        <Container
          className="position-relative"
          style={{ marginBottom: "-2.5%" }}
        >
          <Row>
            <Col md={5} className="mt-5 pt-5 text-uppercase">
              <h1>
                Dreaming <br />
                about a future
              </h1>
              <h2 style={{ fontWeight: 700 }}>in healthcare?</h2>
              <p>
                Explore your potential in a curious, fast-paced, and
                innovation-driven environment.
              </p>
              <Button variant="pink-1 text-uppercase">
                work with kriyamed
                <AiOutlineArrowRight />
              </Button>
            </Col>

            <Col md={7} className="text-left">
              <img
                className="mt-3 img-fluid"
                src="/images/career/airplane.png"
                alt="hand"
                height="auto"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CareerBanner;
