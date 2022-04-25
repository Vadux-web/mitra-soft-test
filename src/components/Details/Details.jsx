import React from "react";
import { Container } from "react-bootstrap";
import DetailsCard from "./DetailsCard/DetailsCard";

let Details = (props) => {
  return (
    <div>
      <Container>
        <h1>Подробнее</h1>
        <DetailsCard details={props.details} />
      </Container>
    </div>
  );
};

export default Details;
