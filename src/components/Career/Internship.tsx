import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function Internship() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-white-1 {
      background-color: white;
      color: black;
    }
    .btn-white-1:hover {
      box-shadow: 0px 0px 60px 6px rgba(215,59,140,0.25);
      color: black;
    }
    `}
      </style>
      <div
        style={{
          backgroundImage: `url("/images/career/purple1-rectangle.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col className="text-white">
              <h1 className="pt-5 mt-5 pb-1" style={{ fontWeight: 700 }}>
                Internships at Kriya
              </h1>
              <div
                className="mb-4 d-none d-lg-block"
                style={{
                  borderBottom: "3px white solid",
                  width: "120px",
                  marginLeft: "326px",
                }}
              >
                {""}
              </div>

              <p className="mb-3 pb-3">
                We are always on the lookout for interns with fresh
                perspectives, innovative ideas, and a passion for implementing
                meaningful change.
                <br /> <br />
                During your internship at Kriya, you will get the chance to gain
                varied, on-ground experience in different workstreams, test
                strengths, and build leadership skills. You will be mentored by
                some of the best leaders in their respective fields before you
                choose to pursue your field of interest.
                <br /> <br />
                Many of our greatest minds, who found their niche at Kriyamed,
                started as interns. We value our interns and offer them several
                opportunities to do impactful work and gain real-world
                experience in the following fields:
              </p>
              <p
                className="text-uppercase"
                style={{
                  color: "#f8d882",
                  letterSpacing: "2px",
                  fontWeight: 700,
                }}
              >
                ⬥ Products and healthtech
                <br />
                <br />
                ⬥ Microbiology
                <br />
                <br />
                ⬥ Biochemistry
                <br />
                <br />
                ⬥ Healthtech manufacturing and operations
                <br />
                <br />
              </p>
              <Button className="text-uppercase mb-5" variant="white-1">
                Apply for an internship program <AiOutlineArrowRight />
              </Button>
            </Col>
            <Col lg={6} md={6} className="pt-5">
              <img src="/images/career/scope.png" alt="12" height={600} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Internship;
