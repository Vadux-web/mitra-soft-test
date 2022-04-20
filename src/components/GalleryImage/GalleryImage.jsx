import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import Styles from "./Styles";
import { Link } from "react-router-dom";

let GalleryImage = () => {
  return (
    <div>
      <Styles>
        <Card className="bg-dark text-white">
          <Card.Img src="https://picsum.photos/320/200" alt="Card image" />
          <Card.ImgOverlay>
            <Button variant="primary">
              <Link to="/details">Подробнее</Link>
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Styles>
    </div>
  );
};

export default GalleryImage;
