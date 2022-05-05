import React from "react";
import { StyledImg } from "./Styles";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import avatar from "../../assets/images/me.jpg";

const Navibar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" expand={false}>
        <Container>
          <Navbar.Brand href="/">MitraSoft (test)</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Вадим Лунёв
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="info">
                <StyledImg src={avatar} alt={"ava"} />
                <div>
                  <p>lunev82@gmail.com</p>
                </div>
              </div>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Галерея</Nav.Link>
                <Nav.Link href="/about">Обо мне</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navibar;
