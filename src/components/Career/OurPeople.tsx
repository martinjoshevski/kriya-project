import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";

export default class OurPeople extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 5.3,
      speed: 12200,
      autoplaySpeed: 0,
      cssEase: "linear",
      slidesToScroll: 1,
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
            slidesToShow: 2,
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
    .div-white:hover {
      background: white;
      cursor: pointer;
    }
    

    `}
        </style>
        <div className="position-relative overflow-hidden ">
          <div
            style={{
              backgroundImage: `url("/images/career/blue-rectangle.png")`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundSize: "cover",
            }}
          >
            <div>
              <Row className="mb-4">
                <Col md={1} sm={0} />
                <Col md={10} sm={12}>
                  <h1
                    className="pt-5 mt-5 pb-1 text-center"
                    style={{ fontWeight: 700 }}
                  >
                    Our People
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
                  <p className="text-center">
                    At Kriya, our people are our biggest asset. We believe our
                    success to be powered by our talented and passionate team
                    who works tirelessly to find innovative solutions for the
                    most pressing healthcare diagnostic challenges across the
                    globe.
                    <br />
                    <br />
                    In order to ensure our people are driven to push boundaries
                    and grow professionally and personally, we continually work
                    towards enabling a stimulating and rewarding work
                    environment.
                    <br />
                    <br />
                    We are led by a stalwart team which brings decades of
                    experience from diverse industries. Their vision seamlessly
                    resonates with ours to enable ‘Good health for all’.
                  </p>
                </Col>
                <Col md={1} sm={0} />
              </Row>
              <Row>
                <Col sm={12} className="mb-4">
                  <Slider {...settings}>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person1.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person2.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person3.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person4.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person1.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person2.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person3.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="div-white p-1 mx-auto"
                        style={{ width: "180px" }}
                      >
                        <img
                          className="m-auto"
                          src="/images/career/person4.png"
                          alt="love"
                          width={105}
                          height={105}
                        />
                        <p
                          className="pt-1"
                          style={{ color: "#2b2b2b", fontWeight: 700 }}
                        >
                          Name Placeholder
                          <br />
                        </p>
                        <span>Designation</span>
                      </div>
                    </div>
                  </Slider>
                </Col>
              </Row>
              <Row className="mt-3 pb-4">
                <Col md={3} sm={0} />
                <Col md={6} sm={12}>
                  <p className="text-center ">
                    Using Lorem ipsum to focus attention on graphic elements in
                    a webpage design proposal. In publishing and graphic design,
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate here in this place.
                  </p>
                </Col>
                <Col md={3} sm={0} />
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
