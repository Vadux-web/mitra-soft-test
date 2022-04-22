import React from "react";
import { Container } from "react-bootstrap";
import Styles from "./Styles";
import GalleryContainer from "./Gallery/GalleryContainer";

let Home = (props) => {
  return (
    <div>
      <Styles>
        <Container>
          <h1>Галерея</h1>
          <GalleryContainer />
        </Container>
      </Styles>
    </div>
  );
};

export default Home;
