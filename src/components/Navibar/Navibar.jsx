import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Styles from "./Styles";
import avatar from "../../assets/images/624301325.png";

let Navibar = () => {
  return (
    <div>
      <Styles>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="none"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="info">
                <img className="avatar" src={avatar} alt={"ava"} />
                <div>
                  <p className="info_text">Лунёв Вадим</p>
                  <p className="info_text">lunev82@gmail.com</p>
                </div>
              </div>
              <Nav className="me-auto">
                <Nav.Link href="/">Галерея</Nav.Link>
                <Nav.Link href="/about">Обо мне</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  );
};

export default Navibar;
