import Details from "./Details";
import { connect } from "react-redux";
import { setDetailsAC } from "../../redux/details-reducer";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../api/api";

const DetailsContainer = (props) => {
  const location = useLocation();
  let id = location.pathname.split("/")[2];

  useEffect(() => {
    getDetails(id).then((data) => {
      props.setDetails(data);
    });
  }, []);
  return <Details {...props} details={props.details} />;
};

let mapStateToProps = (state) => ({ details: state.detailsPage.details });

export default connect(mapStateToProps, {
  setDetails: setDetailsAC,
})(DetailsContainer);

//TODO useMatchParams
