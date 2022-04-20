import React from "react";
import { Container } from "react-bootstrap";
import GalleryImagePart from "../GalleryImagePart/GalleryImagePart";
import Styles from "./Styles";

let Home = (props) => {
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
