import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from '../../Images/logo.png'

const TopMenubar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" id="navbar">
        <Container>
          <Navbar.Brand href="/"><Image src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Courses</Nav.Link>
              <Nav.Link href="#pricing">Free Coaching</Nav.Link>
              <Nav.Link href="#pricing">Success Stories</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenubar;
