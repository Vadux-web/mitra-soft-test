import React from "react";
import { connect } from "react-redux";
import { setCardAC, toggleIsFetchingAC } from "../../../redux/gallery-reducer";
import axios from "axios";
import Gallery from "./Gallery";
import { Spinner } from "react-bootstrap";
import Preloader from "../../common/Preloader/Preloader";

class GalleryContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=24")
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setCards(response.data);
      });
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Gallery cards={this.props.cards} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cards: state.homePage.cards,
    isFetching: state.homePage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     setCards: (cards) => {
//       dispatch(setCardAC(cards));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  setCards: setCardAC,
  toggleIsFetching: toggleIsFetchingAC,
})(GalleryContainer);
