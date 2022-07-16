import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

export default class EmployingSlider extends Component {
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
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
        <div
          className="position-relative overflow-hidden pt-5"
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <div
            className="mt-5"
            style={{
              backgroundColor: "#f9f9f9",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
              backgroundSize: "cover",
            }}
          >
            <div>
              <Row>
                <Col sm={1} />
                <Col sm={2}>
                  <h2
                    className="pt-2 mt-2 pb-1 text-start"
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
                  <div>
                    <Button
                      variant="purple"
                      className="button"
                      onClick={this.previous}
                      style={{ borderRadius: "50%", color: "#9e4c8f" }}
                    >
                      <FaArrowLeft />
                    </Button>
                    <Button
                      variant="purple"
                      className="button"
                      onClick={this.next}
                      style={{
                        borderRadius: "50%",
                        marginLeft: "1rem",
                        color: "#9e4c8f",
                      }}
                    >
                      <FaArrowRight />
                    </Button>
                  </div>
                </Col>
                <Col sm={9} className="text-center pt-2 mt-2 pb-1">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    <div className="w-75">
                      <img
                        src="/images/about/emp1.png"
                        alt="e1"
                        className="mb-1"
                      />
                      <p className="pt-3 text-start">
                        Leverage high- quality data for error-proof diagnostics
                      </p>
                    </div>
                    <div className="w-75">
                      <img
                        src="/images/about/emp2.png"
                        alt="e1"
                        className="mb-1"
                      />
                      <p className="pt-3 text-start">
                        Empower healthcare systems by connecting providers
                      </p>
                    </div>
                    <div className="w-75">
                      <img
                        src="/images/about/emp3.png"
                        alt="e1"
                        className="mb-1"
                      />
                      <p className="pt-3 text-start">
                        Optimize for low-cost solutions
                      </p>
                    </div>
                    <div className="w-75">
                      <img
                        src="/images/about/emp1.png"
                        alt="e1"
                        className="mb-1"
                      />
                      <p className="pt-3 text-start">
                        Leverage high- quality data for error-proof diagnostics
                      </p>
                    </div>
                    <div className="w-75">
                      <img
                        src="/images/about/emp2.png"
                        alt="e1"
                        className="mb-1"
                      />
                      <p className="pt-3 text-start">
                        Empower healthcare systems by connecting providers
                      </p>
                    </div>
                    <div className="w-75">
                      <img
                        src="/images/about/emp3.png"
                        alt="e1"
                        className="mb-1"
                      />
                      <p className="pt-3 text-start">
                        Optimize for low-cost solutions
                      </p>
                    </div>
                  </Slider>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
