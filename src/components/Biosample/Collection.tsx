import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiFillCheckCircle, AiOutlineArrowRight } from "react-icons/ai";

function Collection() {
  const [active, setActive] = useState("first");
  return (
    <>
      <style type="text/css">
        {`
    .div-hover {
     
    }
    .div-hover:hover {
      border-radius: 10px;
      background-color: white;
      cursor: pointer;
    }
    .div-active {
      background-color: white;
    }
    .div-samples {
      border-bottom: 5px #c5ecee solid;
      cursor: pointer;
      
    }
    .div-samples:hover {
      color: #d73b8b;
      border-bottom: none;
    }
    .btn-pink-3 {
      background-color: #d73b8b;
      color: white;
      
    }
    .btn-pink-3:hover {
      box-shadow: 0px 0px 60px 6px rgba(215,59,140,0.25);
      color: white;
    }
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
          backgroundImage: `url("/images/biosample/pink-rectangle.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Container className="pt-5">
          <h4 className="text-center pt-5" style={{ fontWeight: 700 }}>
            The biosample collection and preparation product range includes:
          </h4>
          <Row className="pt-5 d-flex flex-sm-column flex-lg-row">
            <Col className="d-flex flex-column text-center justify-content-center align-items-center">
              <div
                typeof="button"
                onClick={() => {
                  setActive("first");
                }}
                className={
                  active === "first"
                    ? "div-active div-hover position-relative"
                    : "div-hover position-relative"
                }
                style={{ height: "230px" }}
              >
                <img
                  className="mb-4 mt-3"
                  src="/images/biosample/img1.png"
                  alt="love"
                  width={94}
                  height={94}
                />
                <p style={{ color: "#2b2b2b", fontWeight: 700 }}>
                  Vacuum and Non-Vacuum Blood Collection Tubes
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column text-center justify-content-center align-items-center">
              <div
                typeof="button"
                onClick={() => {
                  setActive("second");
                }}
                className={
                  active === "second"
                    ? "div-active div-hover position-relative"
                    : "div-hover position-relative"
                }
                style={{ height: "230px" }}
              >
                <img
                  className="mb-4 mt-3"
                  src="/images/biosample/img2.png"
                  alt="love"
                  width={94}
                  height={94}
                />
                <p
                  style={{ color: "#2b2b2b", fontWeight: 700 }}
                  className="p-3"
                >
                  Urine Collection System
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column text-center justify-content-center align-items-center">
              <div
                typeof="button"
                onClick={() => {
                  setActive("third");
                }}
                className={
                  active === "third"
                    ? "div-active div-hover position-relative"
                    : "div-hover position-relative"
                }
                style={{ height: "230px" }}
              >
                <img
                  className="mb-4 mt-3"
                  src="/images/biosample/img3.png"
                  alt="love"
                  width={94}
                  height={94}
                />
                <p
                  style={{ color: "#2b2b2b", fontWeight: 700 }}
                  className="p-3"
                >
                  Blood Collection Accessories
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column text-center justify-content-center align-items-center">
              <div
                typeof="button"
                onClick={() => {
                  setActive("fourth");
                }}
                className={
                  active === "fourth"
                    ? "div-active div-hover position-relative"
                    : "div-hover position-relative"
                }
                style={{ height: "230px" }}
              >
                <img
                  className="mb-4 mt-3"
                  src="/images/biosample/img5.png"
                  alt="love"
                  width={94}
                  height={94}
                />
                <p style={{ color: "#2b2b2b", fontWeight: 700 }}>
                  Smart Specimen Transportation System
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column text-center justify-content-center align-items-center">
              <div
                typeof="button"
                onClick={() => {
                  setActive("fifth");
                }}
                className={
                  active === "fifth"
                    ? "div-active div-hover position-relative"
                    : "div-hover position-relative"
                }
                style={{ height: "230px" }}
              >
                <img
                  className="mb-4 mt-3"
                  src="/images/biosample/img4.png"
                  alt="love"
                  width={94}
                  height={94}
                />
                <p style={{ color: "#2b2b2b", fontWeight: 700 }}>
                  Swab and Saliva-Based Sample Collection Devices
                </p>
              </div>
            </Col>
          </Row>
          {active === "first" && (
            <>
              <div>
                <h1
                  className="w-sm-100 w-lg-75 text-center m-auto pt-5"
                  style={{ fontWeight: 700 }}
                >
                  Vacuum and Non-Vacuum Blood Collection Tubes
                </h1>
                <p className="text-center pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  autem, eaque dignissimos ipsam exercitationem voluptates nobis
                  unde fuga esse mollitia?
                  <br />
                  <br />
                  <span style={{ fontWeight: 700 }}>
                    The devices’ most notable features include:
                  </span>
                </p>
                <Row>
                  <Col sm={12} lg={6}>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        100% sensitivity, specificity, and reproducibility
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Eliminating the need for cold chain transport by
                        maintaining specimen integrity until processing
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Decreased turnaround time and overall cost by 40% and
                        50%, respectively, through an extraction-free process
                      </p>
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    {" "}
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Guaranteed technician safety with minimal risk of
                        infections
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Ergonomically designed saliva collection funnel to
                        prevent reverse flow and ensure patient safety
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                className="mt-5"
                style={{
                  backgroundImage: `url("/images/biosample/purple-rectangle.png")`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <Row>
                  <Col lg={2} />
                  <Col lg={6} className="mt-5 pt-1 mb-5">
                    <div className="text-white ">
                      <h2>Applications</h2>
                      <h6>Collection and transport of specimens for:</h6>
                      <p>
                        • RNA sequencing for the detection of SARS-CoV-2,
                        influenza, and HPV
                        <br />• DNA sequencing for genomic studies
                      </p>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </div>

              <Row className="pt-5 mt-5 text-center">
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture1.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture2.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture3.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
              </Row>

              <Row className=" pt-5 mb-5 pb-5">
                <Col />
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="white-1 mt-1">
                    VIEW ENTIRE CATALOGUE <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="pink-3 mt-1">
                    REQUEST MORE DETAILS <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col />
              </Row>
            </>
          )}
          {active === "second" && (
            <>
              <div>
                <h1
                  className="w-50 text-center m-auto pt-5"
                  style={{ fontWeight: 700 }}
                >
                  Urine Collection System
                </h1>
                <p className="text-center pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quisquam perspiciatis enim dolores harum inventore sed
                  autem nulla iste excepturi aliquam quas, omnis voluptatibus
                  amet!
                  <br />
                  <br />
                  <span style={{ fontWeight: 700 }}>
                    The devices’ most notable features include:
                  </span>
                </p>{" "}
                <Row>
                  <Col sm={12} lg={6}>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        100% sensitivity, specificity, and reproducibility
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Eliminating the need for cold chain transport by
                        maintaining specimen integrity until processing
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Decreased turnaround time and overall cost by 40% and
                        50%, respectively, through an extraction-free process
                      </p>
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    {" "}
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Guaranteed technician safety with minimal risk of
                        infections
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Ergonomically designed saliva collection funnel to
                        prevent reverse flow and ensure patient safety
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                className="mt-5"
                style={{
                  backgroundImage: `url("/images/biosample/purple-rectangle.png")`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <Row>
                  <Col lg={2} />
                  <Col lg={6} className="mt-5 pt-1 mb-5">
                    <div className="text-white ">
                      <h2>Applications</h2>
                      <h6>Collection and transport of specimens for:</h6>
                      <p>
                        • RNA sequencing for the detection of SARS-CoV-2,
                        influenza, and HPV
                        <br />• DNA sequencing for genomic studies
                      </p>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </div>
              <Row className="pt-5 mt-5 text-center">
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture1.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture2.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture3.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
              </Row>

              <Row className=" pt-5 mb-5 pb-5">
                <Col />
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="white-1 mt-1">
                    VIEW ENTIRE CATALOGUE <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="pink-3 mt-1">
                    REQUEST MORE DETAILS <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col />
              </Row>
            </>
          )}
          {active === "third" && (
            <>
              <div>
                <h1
                  className="w-50 text-center m-auto pt-5"
                  style={{ fontWeight: 700 }}
                >
                  Blood Collection Accessories
                </h1>
                <p className="text-center pt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias reprehenderit fugiat quo. Sapiente, ut maiores rerum,
                  illo voluptas, modi quasi consequuntur exercitationem
                  voluptatibus vero vitae. Veniam, fuga neque nesciunt accusamus
                  ratione laudantium ad, incidunt, dolor expedita eius ullam
                  perferendis dolores repellendus iure explicabo id harum? Non
                  incidunt corporis autem exercitationem.
                  <br />
                  <br />
                  <span style={{ fontWeight: 700 }}>
                    The devices’ most notable features include:
                  </span>
                </p>
                <Row>
                  <Col sm={12} lg={6}>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        100% sensitivity, specificity, and reproducibility
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Eliminating the need for cold chain transport by
                        maintaining specimen integrity until processing
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Decreased turnaround time and overall cost by 40% and
                        50%, respectively, through an extraction-free process
                      </p>
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    {" "}
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Guaranteed technician safety with minimal risk of
                        infections
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Ergonomically designed saliva collection funnel to
                        prevent reverse flow and ensure patient safety
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                className="mt-5"
                style={{
                  backgroundImage: `url("/images/biosample/purple-rectangle.png")`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <Row>
                  <Col lg={2} />
                  <Col lg={6} className="mt-5 pt-1 mb-5">
                    <div className="text-white ">
                      <h2>Applications</h2>
                      <h6>Collection and transport of specimens for:</h6>
                      <p>
                        • RNA sequencing for the detection of SARS-CoV-2,
                        influenza, and HPV
                        <br />• DNA sequencing for genomic studies
                      </p>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </div>
              <Row className="pt-5 mt-5 text-center">
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture1.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture2.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture3.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
              </Row>

              <Row className=" pt-5 mb-5 pb-5">
                <Col />
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="white-1 mt-1">
                    VIEW ENTIRE CATALOGUE <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="pink-3 mt-1">
                    REQUEST MORE DETAILS <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col />
              </Row>
            </>
          )}
          {active === "fourth" && (
            <>
              <div>
                <h1
                  className="w-50 text-center m-auto pt-5"
                  style={{ fontWeight: 700 }}
                >
                  Swab and Saliva-Based Sample Collection Devices
                </h1>
                <p className="text-center pt-4">
                  Our range of molecular transport media is ideal for easy, safe
                  collection and transport of saliva and oral samples. We also
                  ensure efficient RNA and DNA sequencing and transport for
                  nasopharyngeal samples. All our products are compatible with
                  various instruments, extraction kits, and PCR amplification
                  kits.
                  <br />
                  <br />
                  <span style={{ fontWeight: 700 }}>
                    The devices’ most notable features include:
                  </span>
                </p>
                <Row>
                  <Col sm={12} lg={6}>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        100% sensitivity, specificity, and reproducibility
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Eliminating the need for cold chain transport by
                        maintaining specimen integrity until processing
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Decreased turnaround time and overall cost by 40% and
                        50%, respectively, through an extraction-free process
                      </p>
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    {" "}
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Guaranteed technician safety with minimal risk of
                        infections
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Ergonomically designed saliva collection funnel to
                        prevent reverse flow and ensure patient safety
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                className="mt-5"
                style={{
                  backgroundImage: `url("/images/biosample/purple-rectangle.png")`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <Row>
                  <Col lg={2} />
                  <Col lg={6} className="mt-5 pt-1 mb-5">
                    <div className="text-white ">
                      <h2>Applications</h2>
                      <h6>Collection and transport of specimens for:</h6>
                      <p>
                        • RNA sequencing for the detection of SARS-CoV-2,
                        influenza, and HPV
                        <br />• DNA sequencing for genomic studies
                      </p>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </div>
              <Row className="pt-5 mt-5 text-center">
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture1.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture2.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture3.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
              </Row>

              <Row className=" pt-5 mb-5 pb-5">
                <Col />
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="white-1 mt-1">
                    VIEW ENTIRE CATALOGUE <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="pink-3 mt-1">
                    REQUEST MORE DETAILS <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col />
              </Row>
            </>
          )}
          {active === "fifth" && (
            <>
              <div>
                <h1
                  className="w-sm-100 w-lg-75 text-center m-auto pt-5"
                  style={{ fontWeight: 700 }}
                >
                  Smart Specimen Transportation System
                </h1>
                <p className="text-center pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam soluta recusandae quam doloremque suscipit non quos
                  laboriosam molestiae, harum quisquam iusto blanditiis vitae
                  optio autem distinctio aut eligendi nobis sit, id ipsum maxime
                  voluptates nulla est aspernatur! Excepturi, sunt harum.
                  <br />
                  <br />
                  <span style={{ fontWeight: 700 }}>
                    The devices’ most notable features include:
                  </span>
                </p>
                <Row>
                  <Col sm={12} lg={6}>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        100% sensitivity, specificity, and reproducibility
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Eliminating the need for cold chain transport by
                        maintaining specimen integrity until processing
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Decreased turnaround time and overall cost by 40% and
                        50%, respectively, through an extraction-free process
                      </p>
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    {" "}
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Guaranteed technician safety with minimal risk of
                        infections
                      </p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <AiFillCheckCircle color="#f1cb95" size={22} />
                      </div>
                      <p style={{ marginLeft: "5px" }}>
                        Ergonomically designed saliva collection funnel to
                        prevent reverse flow and ensure patient safety
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                className="mt-5"
                style={{
                  backgroundImage: `url("/images/biosample/purple-rectangle.png")`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <Row>
                  <Col lg={2} />
                  <Col lg={6} className="mt-5 pt-1 mb-5">
                    <div className="text-white ">
                      <h2>Applications</h2>
                      <h6>Collection and transport of specimens for:</h6>
                      <p>
                        • RNA sequencing for the detection of SARS-CoV-2,
                        influenza, and HPV
                        <br />• DNA sequencing for genomic studies
                      </p>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </div>
              <Row className="pt-5 mt-5 text-center">
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture1.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture2.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="div-samples">
                    <h6 className="pb-5" style={{ fontWeight: 700 }}>
                      Swab Direct Molecular Transport Medium (Without
                      Extraction)
                    </h6>
                    <img
                      src="/images/biosample/picture3.png"
                      alt="1"
                      height={150}
                    />
                  </div>
                </Col>
              </Row>
              <Row className=" pt-5 mb-5 pb-5">
                <Col />
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="white-1 mt-1">
                    VIEW ENTIRE CATALOGUE <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col sm={12} lg={3} className="text-center">
                  <Button variant="pink-3 mt-1">
                    REQUEST MORE DETAILS <AiOutlineArrowRight />
                  </Button>
                </Col>
                <Col />
              </Row>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default Collection;
