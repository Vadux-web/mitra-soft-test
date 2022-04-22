import React from "react";
import { connect } from "react-redux";
import { setCardAC } from "../../../redux/gallery-reducer";
import Gallery from "./Gallery";

let mapStateToProps = (state) => {
  return { cards: state.homePage.cards };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setCards: (cards) => {
      dispatch(setCardAC(cards));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
