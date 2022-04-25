import React from "react";
import { connect } from "react-redux";
import { setCardAC, toggleIsFetchingAC } from "../../../redux/gallery-reducer";
import Gallery from "./Gallery";
import Preloader from "../../common/Preloader/Preloader";
import { getCards } from "../../../api/api";

class GalleryContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getCards().then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setCards(data);
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

export default connect(mapStateToProps, {
  setCards: setCardAC,
  toggleIsFetching: toggleIsFetchingAC,
})(GalleryContainer);
