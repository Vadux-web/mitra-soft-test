import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Styles from "./Styles";

let DetailsCard = (props) => {
  return (
    <div>
      <Styles>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <NavLink to={"/"}>Назад</NavLink>
            </Button>
          </Card.Body>
        </Card>
      </Styles>
    </div>
  );
};

export default DetailsCard;
