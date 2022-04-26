import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Styles from "./Styles";
import Preloader from "../../common/Preloader/Preloader";

let DetailsCard = (props) => {
  if (!props.details) {
    return <Preloader />;
  }
  return (
    <div>
      <Styles>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={props.details.data.url} />
          <Card.Body>
            <Card.Title>{props.details.data.title}</Card.Title>
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
