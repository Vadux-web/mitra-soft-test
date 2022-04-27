import React from "react";
import Styles from "./Styles";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import avatar from "../../assets/images/624301325.png";

let Navibar = () => {
  return (
    <div>
      <Styles>
        <Navbar fixed="top" bg="dark" variant="dark" expand={false}>
          <Container>
            <Navbar.Brand href="#">MitraSoft (test)</Navbar.Brand>
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
                  <img className="avatar" src={avatar} alt={"ava"} />
                  <div>
                    <p className="info_text">lunev82@gmail.com</p>
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
      </Styles>
    </div>
  );
};

export default Navibar;
