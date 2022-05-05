import React from "react";
import { NavLink } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { StyledButton, StyledCard } from "./Styles";
import Preloader from "../../../common/Preloader/Preloader";

const DetailsCard = (props) => {
  if (!props.details) {
    return <Preloader />;
  }
  return (
    <div>
      <StyledCard>
        <Card.Img variant="top" src={props.details.url} />
        <Card.Header>Card ID: #{props.details.id}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.details.title}</ListGroup.Item>
          <ListGroup.Item>URL: {props.details.url}</ListGroup.Item>
        </ListGroup>

        <NavLink to={"/"}>
          <StyledButton>Назад </StyledButton>
        </NavLink>
      </StyledCard>
    </div>
  );
};

export default DetailsCard;
