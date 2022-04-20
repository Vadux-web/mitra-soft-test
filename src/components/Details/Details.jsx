import React from "react";
import { Container } from "react-bootstrap";
import DetailsCard from "./DetailsCard/DetailsCard";

let Details = () => {
  return (
    <div>
      <Container>
        <h1>Подробнее</h1>
        <DetailsCard />
      </Container>
    </div>
  );
};

export default Details;
