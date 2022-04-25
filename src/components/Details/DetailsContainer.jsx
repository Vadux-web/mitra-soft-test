import React from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { setDetailsAC } from "../../redux/details-reducer";
import { getDetails } from "../../api/api";

class DetailsContainer extends React.Component {
  componentDidMount() {
    getDetails().then((data) => {
      this.props.setDetails(data);
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
