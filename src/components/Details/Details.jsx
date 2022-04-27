import React from "react";
import { Container } from "react-bootstrap";
import DetailsCard from "./DetailsCard/DetailsCard";

let Details = (props) => {
  return (
    <div>
      <Container>
        <DetailsCard details={props.details} />
      </Container>
    </div>
  );
};

export default Details;

//TODO поцентру
