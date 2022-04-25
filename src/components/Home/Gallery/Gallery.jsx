import React from "react";
import { Row } from "react-bootstrap";
import GalleryImage from "./GalleryImage/GalleryImage";

let Gallery = (props) => {
  return (
    <div>
      <h3>Раздел 1</h3>
      <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 p-0">
        {props.cards.map((el) => (
          <GalleryImage id={el.id} url={el.url} title={el.title} />
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
