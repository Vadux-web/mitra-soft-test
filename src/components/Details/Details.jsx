import React from "react";
import DetailsCard from "./DetailsCard/DetailsCard";

let Details = (props) => {
  return (
    <div>
      <DetailsCard details={props.details} />
    </div>
  );
};

export default Details;
