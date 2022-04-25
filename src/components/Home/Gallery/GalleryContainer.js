import React from "react";
import { connect } from "react-redux";
import { setCardAC } from "../../../redux/gallery-reducer";
import axios from "axios";
import Gallery from "./Gallery";

class GalleryContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=24")
      .then((response) => {
        console.log(response.data);
        this.props.setCards(response.data);
      });
  }

  render() {
    return <Gallery cards={this.props.cards} />;
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
