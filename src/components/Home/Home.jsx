import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GalleryImagePart from "../GalleryImagePart/GalleryImagePart";
import Styles from "./Styles";

let Home = () => {
  return (
    <div>
      <Styles>
        <Container>
          <h1>Галерея</h1>
          <GalleryImagePart />
        </Container>
      </Styles>
    </div>
  );
};

export default Home;
