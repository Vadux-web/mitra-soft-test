import React from "react";
import DetailsCard from "./DetailsCard/DetailsCard";

const Details = (props) => {
  return (
    <div>
      <h2>Информация о карточке</h2>
      <DetailsCard details={props.details} />
    </div>
  );
};

export default Details;
