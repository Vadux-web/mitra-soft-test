import Details from "./Details";
import { connect } from "react-redux";
import { setDetailsAC } from "../../redux/details-reducer";
import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const DetailsContainer = (props) => {
  const location = useLocation();
  let id = location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/` + id)
      .then((data) => {
        props.setDetails(data);
      });
  }, []);
  return <Details {...props} details={props.details} />;
};

let mapStateToProps = (state) => ({ details: state.detailsPage.details });

export default connect(mapStateToProps, {
  setDetails: setDetailsAC,
})(DetailsContainer);
