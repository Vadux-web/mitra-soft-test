import React from "react";
import { Card, Col } from "react-bootstrap";
import { StyledButton, StyledCard } from "./Styles";

const GalleryImage = (props) => {
  return (
    <div>
      <Col>
        <StyledCard className="bg-dark text-white">
          <Card.Img src={props.thumbnailUrl} alt="Card image" />
          <Card.ImgOverlay>
            <StyledButton variant="primary" href={"/details/" + props.id}>
              Подробнее
            </StyledButton>
          </Card.ImgOverlay>
        </StyledCard>
      </Col>
    </div>
  );
};

export default GalleryImage;
