import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

export default class Stories extends Component {
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
      infinite: false,
      slidesToShow: 2.5,
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
    .heading-hover:hover {
      text-decoration: underline;
      display: block;
    }
    

    `}
        </style>
        <div className="position-relative overflow-hidden pt-5 mb-5 pb-5">
          <div
            className="mt-5"
            style={{
              backgroundColor: "white",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
              backgroundSize: "cover",
            }}
          >
            <div>
              <Row>
                <Col sm={1} />
                <Col sm={3}>
                  <h2
                    className="pt-2 mt-2 pb-1 text-start"
                    style={{ fontWeight: 700 }}
                  >
                    Stories of change
                  </h2>
                  <div
                    className="mb-4 d-none d-lg-block"
                    style={{
                      borderBottom: "3px black solid",
                      width: "120px",
                      marginLeft: "188px",
                    }}
                  >
                    {""}
                  </div>
                </Col>
                <Col className="mt-4">
                  <div className="text-end" style={{ marginRight: "1rem" }}>
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
              </Row>
              <Row>
                <Col sm={12} className="text-center pt-2 mt-2 pb-1">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    <div className="w-75">
                      <div
                        className="p-2 bg-white heading-hover"
                        style={{ height: "200px", cursor: "pointer" }}
                      >
                        <img
                          src="/images/impact/doctor.png"
                          alt="e1"
                          className="mb-1"
                        />
                        <h3
                          className="pt-4 text-start text-break "
                          style={{ fontWeight: 700 }}
                        >
                          Lorem ipsum headline text comes here
                        </h3>
                      </div>
                    </div>
                    <div className="w-75">
                      <div
                        className="p-2 bg-white heading-hover"
                        style={{ height: "200px", cursor: "pointer" }}
                      >
                        <img
                          src="/images/impact/family.png"
                          alt="e1"
                          className="mb-1"
                        />
                        <h3
                          className="pt-4 text-start text-break "
                          style={{ fontWeight: 700 }}
                        >
                          Lorem ipsum headline text comes here
                        </h3>
                      </div>
                    </div>
                    <div className="w-75">
                      <div
                        className="p-2 bg-white heading-hover"
                        style={{ height: "200px", cursor: "pointer" }}
                      >
                        <img
                          src="/images/impact/meter.png"
                          alt="e1"
                          className="mb-1"
                        />
                        <h3
                          className="pt-4 text-start text-break "
                          style={{ fontWeight: 700 }}
                        >
                          Lorem ipsum headline text comes here
                        </h3>
                      </div>
                    </div>
                    <div className="w-75">
                      <div
                        className="p-2 bg-white heading-hover"
                        style={{ height: "200px", cursor: "pointer" }}
                      >
                        <img
                          src="/images/impact/doctor.png"
                          alt="e1"
                          className="mb-1"
                        />
                        <h3
                          className="pt-4 text-start text-break "
                          style={{ fontWeight: 700 }}
                        >
                          Lorem ipsum headline text comes here
                        </h3>
                      </div>
                    </div>
                    <div className="w-75">
                      <div
                        className="p-2 bg-white heading-hover"
                        style={{ height: "200px", cursor: "pointer" }}
                      >
                        <img
                          src="/images/impact/family.png"
                          alt="e1"
                          className="mb-1"
                        />
                        <h3
                          className="pt-4 text-start text-break "
                          style={{ fontWeight: 700 }}
                        >
                          Lorem ipsum headline text comes here
                        </h3>
                      </div>
                    </div>
                    <div className="w-75">
                      <div
                        className="p-2 bg-white heading-hover"
                        style={{ height: "200px", cursor: "pointer" }}
                      >
                        <img
                          src="/images/impact/meter.png"
                          alt="e1"
                          className="mb-1"
                        />
                        <h3
                          className="pt-4 text-start text-break "
                          style={{ fontWeight: 700 }}
                        >
                          Lorem ipsum headline text comes here
                        </h3>
                      </div>
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
