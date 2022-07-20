import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function Openings() {
  return (
    <>
      <style type="text/css">
        {`
  .btn-pink-3 {
    background-color: #d73b8b;
    color: white;
    
  }
  .btn-pink-3:hover {
    box-shadow: 0px 0px 60px 6px rgba(215,59,140,0.25);
    color: white;
  }
  `}
      </style>
      <div
        style={{
          backgroundImage: `url("/images/career/purple-rectangle.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Container className="mb-4">
          <Row>
            <Col md={1} sm={0} />
            <Col md={10} sm={12}>
              <h1
                className="pt-5 mt-5 pb-1 text-center"
                style={{ fontWeight: 700 }}
              >
                Openings at Kriya
              </h1>
              <div
                className="mb-4 d-none d-lg-block"
                style={{
                  borderBottom: "3px black solid",
                  width: "120px",
                  marginLeft: "626px",
                }}
              >
                {""}
              </div>
            </Col>
            <Col md={1} sm={0} />
          </Row>
          <Row>
            <Col>
              <div
                className="bg-white mx-auto mb-4"
                style={{
                  width: "300px",
                  height: "200px",
                  cursor: "pointer",
                  boxShadow: "-3px -1px 400px -7px rgba(215,59,139,0.11)",
                }}
              >
                <div>
                  <div className="pb-3" />
                  <p
                    className="text-center"
                    style={{
                      background: "#ffd78d",
                      width: "160px",
                      letterSpacing: "3px",
                    }}
                  >
                    MARKETING
                  </p>
                </div>
                <div className="p-4">
                  <h5>
                    Senior Digital <br />
                    Marketing Executive
                  </h5>
                  Kormangala, Bangalore
                  <br />
                  <AiOutlineArrowRight size={33} className="mt-2 pb-2" />
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="bg-white mx-auto mb-4"
                style={{
                  width: "300px",
                  height: "200px",
                  cursor: "pointer",
                  boxShadow: "-3px -1px 400px -7px rgba(215,59,139,0.11)",
                }}
              >
                <div>
                  <div className="pb-3" />
                  <p
                    className="text-center"
                    style={{
                      background: "#f7b8d3",
                      width: "160px",
                      letterSpacing: "3px",
                    }}
                  >
                    SOFTWARE
                  </p>
                </div>
                <div className="p-4">
                  <h5>
                    Visual Designer -
                    <br />
                    Lead Role
                  </h5>
                  Kormangala, Bangalore
                  <br />
                  <AiOutlineArrowRight size={33} className="mt-2 pb-2" />
                </div>
              </div>
            </Col>

            <Col>
              <div
                className="bg-white mx-auto mb-4"
                style={{
                  width: "300px",
                  height: "200px",
                  cursor: "pointer",
                  boxShadow: "-3px -1px 400px -7px rgba(215,59,139,0.11)",
                }}
              >
                <div>
                  <div className="pb-3" />
                  <p
                    className="text-center"
                    style={{
                      background: "#dcd9ec",
                      width: "160px",
                      letterSpacing: "3px",
                    }}
                  >
                    ACCOUNTS
                  </p>
                </div>
                <div className="p-4">
                  <h5>
                    Accountacnt
                    <br />
                    Finance
                  </h5>
                  Kormangala, Bangalore
                  <br />
                  <AiOutlineArrowRight size={33} className="mt-2 pb-2" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="bg-white mx-auto mb-4"
                style={{
                  width: "300px",
                  height: "200px",
                  cursor: "pointer",
                  boxShadow: "-3px -1px 400px -7px rgba(215,59,139,0.11)",
                }}
              >
                <div>
                  <div className="pb-3" />
                  <p
                    className="text-center"
                    style={{
                      background: "#c5ecee",
                      width: "160px",
                      letterSpacing: "3px",
                    }}
                  >
                    SERVICE
                  </p>
                </div>
                <div className="p-4">
                  <h5>
                    Personal Assisstant <br />
                    Officer
                  </h5>
                  Kormangala, Bangalore
                  <br />
                  <AiOutlineArrowRight size={33} className="mt-2 pb-2" />
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="bg-white mx-auto mb-4"
                style={{
                  width: "300px",
                  height: "200px",
                  cursor: "pointer",
                  boxShadow: "-3px -1px 400px -7px rgba(215,59,139,0.11)",
                }}
              >
                <div>
                  <div className="pb-3" />
                  <p
                    className="text-center"
                    style={{
                      background: "#c48cb3",
                      width: "160px",
                      letterSpacing: "3px",
                    }}
                  >
                    RESEARCH
                  </p>
                </div>
                <div className="p-4">
                  <h5>
                    Research Analyst <br />
                    Developer
                  </h5>
                  Kormangala, Bangalore
                  <br />
                  <AiOutlineArrowRight size={33} className="mt-2 pb-2" />
                </div>
              </div>
            </Col>

            <Col>
              <div
                className="bg-white mx-auto mb-4"
                style={{
                  width: "300px",
                  height: "200px",
                  cursor: "pointer",
                  boxShadow: "-3px -1px 400px -7px rgba(215,59,139,0.11)",
                }}
              >
                <div>
                  <div className="pb-3" />
                  <p
                    className="text-center"
                    style={{
                      background: "#ffd78d",
                      width: "160px",
                      letterSpacing: "3px",
                    }}
                  >
                    MARKETING
                  </p>
                </div>
                <div className="p-4">
                  <h5>
                    Senior Digital <br />
                    Marketing Executive
                  </h5>
                  Kormangala, Bangalore
                  <br />
                  <AiOutlineArrowRight size={33} className="mt-2 pb-2" />
                </div>
              </div>
            </Col>
            <div className="mx-auto text-center mt-2 mb-2">
              <Button variant="pink-3">
                EXPLORE OPEN OPPORTUNITIES <AiOutlineArrowRight />
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Openings;
