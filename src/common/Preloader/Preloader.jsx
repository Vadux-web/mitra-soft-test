import React from "react";
import { StyledSpinner, StyledDiv } from "./Styles";

const Preloader = () => {
  return (
    <StyledDiv>
      <StyledSpinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </StyledSpinner>
    </StyledDiv>
  );
};

export default Preloader;
