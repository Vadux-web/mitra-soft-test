import React from "react";
import Details from "./Details";
import axios from "axios";
import { connect } from "react-redux";
import { setDetailsAC } from "../../redux/details-reducer";

class DetailsContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/2")
      .then((response) => {
        this.props.setDetails(response.data);
      });
  }

  render() {
    return <Details {...this.props} details={this.props.details} />;
  }
}

let mapStateToProps = (state) => ({ details: state.detailsPage.details });

export default connect(mapStateToProps, {
  setDetails: setDetailsAC,
})(DetailsContainer);
