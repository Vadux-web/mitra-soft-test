import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  REQUEST_CARDS,
  setCardsAC,
  toggleIsFetchingAC,
} from "../redux/gallery-reducer";
import Preloader from "../common/Preloader/Preloader";
import GalleryChunk from "../screens/Gallery/GalleryChunk/GalleryChunk";

/**
 * Функция разбивает входной массив на чанки;
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
  const dispatch = useDispatch();
  dispatch({ type: REQUEST_CARDS });

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
  setCardsAC,
  toggleIsFetchingAC,
})(GalleryContainer);

//TODO saga effects
