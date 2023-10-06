import React from "react";
import ReactDOM from "react-dom";
import {
  StyledModelWrapper,
  StyledModal,
  StyledModalOverlay,
  StyledModalBody,
  StyledModalHeader,
  StyledHeading,
} from "./Modals.styled";

export default function Modal({ children }) {
  return <div>{children}</div>;
}
