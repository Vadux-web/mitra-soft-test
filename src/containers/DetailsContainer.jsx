import Details from "../screens/Details/Details";
import { connect } from "react-redux";
import { setDetailsAC } from "../redux/details-reducer";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../api/api";

const DetailsContainer = (props) => {
  const params = useParams();

  useEffect(() => {
    getDetails(params.id).then((data) => {
      props.setDetails(data);
    });
  }, []);
  return <Details {...props} details={props.details} />;
};

let mapStateToProps = (state) => ({ details: state.detailsPage.details });

export default connect(mapStateToProps, {
  setDetails: setDetailsAC,
})(DetailsContainer);
