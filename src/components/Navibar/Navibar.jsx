import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Styles from "./Styles";
import avatar from "../../assets/images/624301325.png";

let Navibar = () => {
  return (
    <div>
      <Styles>
        <Navbar collapseOnSelect expand="none" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="info">
                <img className="avatar" src={avatar} alt={"ava"} />
                <a>Лунёв Вадим</a>
                <a href="mailto:lunev82@gmail.com">lunev82@gmail.com</a>
              </div>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Галерея</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">Обо мне</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  );
};

export default Navibar;
