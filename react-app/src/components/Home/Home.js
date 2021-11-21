import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HomeCenter } from "../../Styles/Home/HomeCenter.style";
import { HomeContainer } from "../../Styles/Home/HomeContainer.style";
import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import { HomeRight } from "../../Styles/Home/HomeRight.style";
import {
  MdHome,
  MdAlternateEmail,
  MdMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { HomeButton } from "../../Styles/Home/HomeButton.style";
import { Loader } from "../../Styles/Modal/Loader.style";
import ProfileButton from "./ProfileButton";
import TweetComposer from "./CheepComposer";
import CheepCard from "./CheepCard";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.session.user);
  const [cheeps, setCheeps] = useState([]);

  useEffect(() => {
    (async () => {
      if (user) {
        setLoading(true);
        const res = await fetch(`/api/cheeps/user/${user.id}/timeline`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setCheeps(data.data);
        setLoading(false);
      }
    })();
  }, []);

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
        <TweetComposer />
        {loading && (
          <Loader>
            <div />
          </Loader>
        )}
        {cheeps &&
          cheeps.map((cheep) => (
            <CheepCard cheepId={cheep.id} key={cheep.id} />
          ))}
      </HomeCenter>
      <HomeRight></HomeRight>
    </HomeContainer>
  );
}
