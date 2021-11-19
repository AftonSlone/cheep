import React from "react";
import { HomeCenter } from "../../Styles/Home/HomeCenter.style";
import { HomeContainer } from "../../Styles/Home/HomeContainer.style";
import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import { HomeRight } from "../../Styles/Home/HomeRight.style";

export default function Home() {
  return (
    <HomeContainer>
      <HomeLeft></HomeLeft>
      <HomeCenter></HomeCenter>
      <HomeRight></HomeRight>
    </HomeContainer>
  );
}
