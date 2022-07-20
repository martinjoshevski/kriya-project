import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/homepage/footer-rectangle.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row className="pb-5">
          <Col sm={12} lg={1} />
          <Col sm={12} lg={2} className="mt-5">
            <img src="/images/logo/logo-1.png" alt="logo" />
            <h6 className="mt-5" style={{ color: "#2b2b2b", fontWeight: 700 }}>
              CONNECT WITH US
            </h6>
            <div
              style={{ filter: "grayscale(100%)" }}
              className="pt-3 d-flex flex-row justify-content-between w-75 align-content-start"
            >
              <div>
                <a href="/">
                  <FaFacebookF size={22} />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaInstagramSquare size={22} />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaTwitter size={22} />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaLinkedinIn size={22} />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>
            <p className="mt-5" style={{ fontSize: "11px", fontWeight: 700 }}>
              Email ID:{" "}
              <a
                href="mailto:enquire@kriyamed.com"
                style={{ color: "#d73b8b" }}
              >
                enquire@kriyamed.com
              </a>
            </p>
          </Col>
          <Col sm={12} lg={2} className="mt-5 pt-3" style={{ fontWeight: 700 }}>
            <h6 style={{ color: "#d73b8b", fontWeight: 700 }}>OVERVIEW</h6>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Our Company
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Culture of Health
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Care Solutions
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Quality Story
              </a>
            </div>
            <div className="pb-3">
              <a
                href="career"
                style={{ color: "#2b2b2b", textDecoration: "none" }}
              >
                Careers
              </a>
            </div>
          </Col>
          <Col sm={12} lg={2} className="mt-5 pt-3" style={{ fontWeight: 700 }}>
            <h6 style={{ color: "#d73b8b", fontWeight: 700 }}>RESOURCES</h6>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Clinical Research
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Blogs
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Academy
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Community
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Webinars
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Newsletters
              </a>
            </div>
          </Col>
          <Col sm={12} lg={2} className="mt-5 pt-3" style={{ fontWeight: 700 }}>
            <h6 style={{ color: "#d73b8b", fontWeight: 700 }}>PRODUCTS</h6>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Preanalytics
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Diagnostics
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Smart Systems
              </a>
            </div>
          </Col>
          <Col sm={12} lg={2} className="mt-5 pt-3" style={{ fontWeight: 700 }}>
            <h6 style={{ color: "#d73b8b", fontWeight: 700 }}>HELP</h6>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Claim
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Terms of service
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Privacy policy
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Privacy policy
              </a>
            </div>
            <div className="pb-3">
              <a href="/" style={{ color: "#2b2b2b", textDecoration: "none" }}>
                Security
              </a>
            </div>
          </Col>
          <Col sm={12} lg={1} />
        </Row>
        <Row>
          <Col sm={12} lg={1} />
          <Col>
            <div
              className="text-end"
              style={{ borderTop: "1px solid #2b2b2b" }}
            >
              <p style={{ color: "#9e4c8f", fontSize: "12px" }}>
                Copyright © 2021 KRIYA All Rights Reserved
              </p>
            </div>
          </Col>
          <Col sm={12} lg={1} />
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
