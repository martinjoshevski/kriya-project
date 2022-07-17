import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

export default class Culture extends Component {
  slider: Slider | null | undefined;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider!.slickNext();
  }
  previous() {
    this.slider!.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1325,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <style type="text/css">
          {`
    .btn-purple {
      background-color: #f9f9f9;
      color: white;
    }
    .btn-purple:hover {
      background-color: #c9acc3;
    }
    
    `}
        </style>
        <div className="position-relative pb-5 overflow-hidden">
          <div
            style={{
              backgroundImage: `url("/images/about/culture-rectangle.png")`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundSize: "cover",
            }}
          >
            <div>
              <Container>
                <Row className="pt-5">
                  <Col md={2} />
                  <Col md={4}>
                    <h2
                      className="pt-2 mt-2 pb-1 text-start w-sm-100 w-lg-75"
                      style={{ fontWeight: 700 }}
                    >
                      Employing a result-oriented approach
                    </h2>
                    <div
                      className="mb-4 d-none d-lg-block"
                      style={{
                        borderBottom: "3px black solid",
                        width: "120px",
                        marginLeft: "126px",
                      }}
                    >
                      {""}
                    </div>
                  </Col>
                  <Col md={6}>
                    <p className="w-sm-100 w-lg-75 text-sm-center text-lg-start">
                      Kriya Med is a rich and diverse mix of scientists,
                      doctors, engineers, and AI experts – all united by a
                      curiosity to solve complex challenges and improve lives.{" "}
                      <br />
                      <br />
                      We create room for curiosity by nurturing collaborative
                      leadership in every team. We believe that an inspired,
                      empowered, and compassionate leader can help us fulfill
                      our purpose of breaking down barriers and improving
                      healthcare outcomes for all.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Row>
                <Col xs={2} md={1} className="text-end">
                  <Button
                    variant="purple"
                    className="button"
                    onClick={this.previous}
                    style={{
                      borderRadius: "50%",
                      color: "#9e4c8f",
                      marginTop: "9rem",
                    }}
                  >
                    <FaArrowLeft />
                  </Button>
                </Col>

                <Col
                  xs={8}
                  md={9}
                  className="pt-2 mt-2 pb-1 m-sm-auto text-center align-items-center"
                >
                  <Slider
                    ref={(c) => (this.slider = c)}
                    {...settings}
                    className="mx-auto"
                  >
                    <div>
                      <img src="/images/about/img1.png" alt="e1" />
                    </div>
                    <div>
                      <img src="/images/about/img2.png" alt="e1" />
                    </div>
                    <div>
                      <img src="/images/about/img3.png" alt="e1" />
                    </div>
                    <div>
                      <img src="/images/about/img1.png" alt="e1" />
                    </div>
                    <div>
                      <img src="/images/about/img2.png" alt="e1" />
                    </div>

                    <div>
                      <img src="/images/about/img3.png" alt="e1" />
                    </div>
                  </Slider>
                </Col>

                <Col xs={2} md={1}>
                  <Button
                    variant="purple"
                    className="button"
                    onClick={this.next}
                    style={{
                      borderRadius: "50%",
                      color: "#9e4c8f",
                      marginTop: "9rem",
                    }}
                  >
                    <FaArrowRight />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
