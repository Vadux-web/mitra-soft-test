import React from "react";
import { Container } from "react-bootstrap";
import GalleryContainer from "./Gallery/GalleryContainer";

let Home = () => {
  return (
    <div>
      <Container>
        <GalleryContainer />
      </Container>
    </div>
  );
};

export default Home;
