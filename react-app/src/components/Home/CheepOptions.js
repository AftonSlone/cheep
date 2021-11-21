import React from "react";
import { CheepCardOptionsContainer } from "../../Styles/Cheep/CheepCardOptionsContainer.style";

export default function CheepOptions({ setActionsModal }) {
  return (
    <CheepCardOptionsContainer>
      <div onClick={() => setActionsModal(false)}>X</div>
    </CheepCardOptionsContainer>
  );
}
