import { Col, Container, Row } from "react-bootstrap";

function BiosampleBanner() {
  return (
    <Container className="position-relative mb-5">
      <Row>
        <Col md={6} className="mt-5 pt-5">
          <h1 className="display-5" style={{ fontWeight: 700 }}>
            BIOSAMPLE COLLECTION
          </h1>
          <h1 className="display-5">AND PREPARATION</h1>
          <span>Learn what drives our purpose, vision, and values.</span>
          <p>
            Kriya has an innovative portfolio of biosample collection and
            preparation products. Manufactured with state-of-the-art technology,
            the products revolutionise the collection of blood and other bodily
            fluids. They also support the preanalytical process by incorporating
            traceability and accuracy in the workflow. <br />
            <br />
            Our products eliminate diagnostic errors and reduce costs and
            turnaround time, thereby ensuring better treatment outcomes for all.
          </p>
        </Col>

        <Col md={6} className="text-left">
          <img
            className="mt-3 img-fluid"
            src="/images/biosample/fingers.png"
            alt="hand"
            height="auto"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BiosampleBanner;
