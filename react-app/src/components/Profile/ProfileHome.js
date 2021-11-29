import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HomeButton } from "../../Styles/Home/HomeButton.style";
import { HomeCenter } from "../../Styles/Home/HomeCenter.style";
import { HomeContainer } from "../../Styles/Home/HomeContainer.style";
import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import { HomeRight } from "../../Styles/Home/HomeRight.style";
import { Loader } from "../../Styles/Modal/Loader.style";
import {
  MdHome,
  MdAlternateEmail,
  MdMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import ProfileButton from "../Home/ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import { singleCheep, updateNewCheep } from "../../store/cheep";
import { Modal } from "../Modal/Modal";
import CheepCard from "../Home/CheepCard";
import UserProfileCard from "./UserProfileCard";
import EditProfileModal from "./EditProfileModal";
import CheepModal from "../Home/CheepModal";
import CheepOptions from "../Home/CheepOptions";
import EditCheep from "../Home/EditCheep";

export default function ProfileHome() {
  const dispatch = useDispatch();
  const [loading] = useState(false);
  const user = useSelector((state) => state.session.user);
  const editProfile = useSelector((state) => state.profile.editProfileModal);
  const cheepModal = useSelector((state) => state.cheep.newCheep);
  const actionsModal = useSelector((state) => state.cheep.actionsMenu);
  const editCheepModal = useSelector((state) => state.cheep.editCheep);
  const [update, setUpdate] = useState(false);
  const { id } = useParams();

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
        <HomeButton onClick={() => dispatch(updateNewCheep(true))}>
          Cheep
        </HomeButton>
        <ProfileButton />
      </HomeLeft>
      <HomeCenter>
        {loading && (
          <Loader>
            <div />
          </Loader>
        )}
        {user && <UserProfileCard />}
        {user &&
          user.cheeps.map((cheep) => (
            <CheepCard cheepId={cheep.id} key={cheep.id} />
          ))}

        {editProfile && (
          <Modal type="edit">
            <EditProfileModal />
          </Modal>
        )}

        {cheepModal && (
          <Modal type="edit">
            <CheepModal />
          </Modal>
        )}

        {actionsModal && (
          <Modal type="edit">
            <CheepOptions />
          </Modal>
        )}

        {editCheepModal && (
          <Modal type="edit">
            <EditCheep />
          </Modal>
        )}
      </HomeCenter>
      <HomeRight></HomeRight>
    </HomeContainer>
  );
}
