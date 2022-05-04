import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.6s, visibility 0.6s;
  opacity: 0;
  visibility: hidden;
`;

export const StyledCard = styled(Card)`
  :hover .btn {
    opacity: 1;
    visibility: visible;
  }
`;
