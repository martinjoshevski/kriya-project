import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        style={{ fontFamily: `"Poppins", sans-serif` }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/company">Our Company</Nav.Link>
              <Nav.Link href="/products">Our Products</Nav.Link>
              <Nav.Link href="/impact">Our Impact</Nav.Link>
              <Nav.Link href="/r&d">Our R&D</Nav.Link>
              <Nav.Link href="/">
                <img src="/images/homepage/burger.png" alt="burger" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
