import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

let Navibar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>MiraSoft</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Галерея</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">Обо мне</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/details">Подробнее</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className={"me-2"}>
                Log In
              </Button>
              <Button variant="primary">Sign out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navibar;
