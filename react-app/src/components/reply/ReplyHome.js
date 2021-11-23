import React, { useState } from "react";
import { HomeButton } from "../../Styles/Home/HomeButton.style";
import { HomeCenter } from "../../Styles/Home/HomeCenter.style";
import { HomeContainer } from "../../Styles/Home/HomeContainer.style";
import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import { HomeRight } from "../../Styles/Home/HomeRight.style";
import { Loader } from "../../Styles/Modal/Loader.style";
import ProfileButton from "../Home/ProfileButton";

export default function ReplyHome() {
  const [loading, setLoading] = useState(false);
  return (
    <HomeContainer>
      <HomeLeft>
        <a href="/home">
          <BsTwitter />
        </a>
        <a href="/home">
          <MdHome /> Home
        </a>
        <a href="/home">
          <MdAlternateEmail /> Mentions
        </a>
        <a href="/home">
          <MdMailOutline /> Messages
        </a>
        <a href="/home">
          <MdPersonOutline /> Profile
        </a>
        <HomeButton>Cheep</HomeButton>
        <ProfileButton />
      </HomeLeft>
      <HomeCenter>
        {loading && (
          <Loader>
            <div />
          </Loader>
        )}
      </HomeCenter>
      <HomeRight></HomeRight>
    </HomeContainer>
  );
}
