import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Styles from "./Styles";

const GalleryImage = (props) => {
  return (
    <div>
      <Styles>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={props.thumbnailUrl} alt="Card image" />
            <Card.ImgOverlay>
              <Button variant="primary" href={"/details/" + props.id}>
                Подробнее
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Styles>
    </div>
  );
};

export default GalleryImage;
