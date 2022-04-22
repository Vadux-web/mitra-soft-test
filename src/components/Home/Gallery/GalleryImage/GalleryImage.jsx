import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Styles from "./Styles";
import { NavLink } from "react-router-dom";

let GalleryImage = (props) => {
  return (
    <div>
      <Styles>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={props.url} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{props.title}</Card.Title>
              <Button variant="primary">
                <NavLink to={"/details/" + props.id}>Подробнее</NavLink>
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Styles>
    </div>
  );
};

export default GalleryImage;
