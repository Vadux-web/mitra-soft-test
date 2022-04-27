import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCardAC, toggleIsFetchingAC } from "../../../redux/gallery-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { getCards } from "../../../api/api";
import GalleryChunk from "./GalleryChunk";

/**
 * Функция разбивает на чанки;
 * @param myArray - входной массив
 * @param chunk_size - размер чанка
 * @returns {*[]} - массив из чанков
 */
const chunkArray = (myArray, chunk_size) => {
  const arrayLength = myArray.length;
  const tempArray = [];
  for (let index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
};

const GalleryContainer = (props) => {
  useEffect(() => {
    props.toggleIsFetching(true);
    getCards().then((data) => {
      props.toggleIsFetching(false);
      props.setCards(data);
    });
  }, []);

  const photosChunks = chunkArray(props.cards, 6);

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      {photosChunks.map((photosChunk, index) => (
        <GalleryChunk key={index} partIndex={index} cards={photosChunk} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.homePage.cards,
    isFetching: state.homePage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setCards: setCardAC,
  toggleIsFetching: toggleIsFetchingAC,
})(GalleryContainer);

//TODO saga effects
