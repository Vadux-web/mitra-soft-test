import React from "react";
import { Row } from "react-bootstrap";
import GalleryImage from "./GalleryImage/GalleryImage";
import { StyledDiv } from "./Styles";

/**
 * Компонент раздела, массив из chunk_size элементов
 * @param props - принимает чанк-массив и partIndex для нумерации разделов
 * @returns {JSX.Element}
 * @constructor
 */
const GalleryChunk = (props) => {
  return (
    <StyledDiv>
      <h3>Раздел {props.partIndex + 1}</h3>
      <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 p-0">
        {props.cards.map((el) => (
          <GalleryImage
            key={el.id}
            id={el.id}
            thumbnailUrl={el.thumbnailUrl}
            title={el.title}
          />
        ))}
      </Row>
    </StyledDiv>
  );
};

export default GalleryChunk;
