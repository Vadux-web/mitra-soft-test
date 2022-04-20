import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import GalleryImage from "../GalleryImage/GalleryImage";

let GalleryImagePart = (props) => {
  return (
    <div>
      <h3>Раздел 1</h3>
      <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <Col>
          <GalleryImage />
        </Col>
        <Col>
          <GalleryImage />
        </Col>
        <Col>
          <GalleryImage />
        </Col>
        <Col>
          <GalleryImage />
        </Col>
        <Col>
          <GalleryImage />
        </Col>
        <Col>
          <GalleryImage />
        </Col>
      </Row>
    </div>
  );
};

export default GalleryImagePart;
