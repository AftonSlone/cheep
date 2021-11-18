import React from "react";
import { ModalContainer } from "../../Styles/Modal/ModalContainer.style";

export default function Modal({ component: Component, ...rest }) {
  return (
    <ModalContainer>
      <Component {...rest} />
    </ModalContainer>
  );
}
