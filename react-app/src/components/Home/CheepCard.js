import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../Styles/Modal/Loader.style";
import { CheepCardContainer } from "../../Styles/Cheep/CheepCardContainer.style";
import {
  MdOutlineChatBubbleOutline,
  MdOutlineCached,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { CheepCardProfilePhoto } from "../../Styles/Cheep/CheepCardProfilePhoto.style";
import { CheepCardUsername } from "../../Styles/Cheep/CheepCardUsername.style";
import { CheepCardContentContainer } from "../../Styles/Cheep/CheepCardContentContainer.style";
import { CheepCardContent } from "../../Styles/Cheep/CheepCardContent.style";
import { CheepCardActions } from "../../Styles/Cheep/CheepCardActions.style";

export default function CheepCard({ cheep }) {
  const loading = useSelector((state) => state.loading.loading);
  const user = useSelector((state) => state.session.user);
  return (
    <CheepCardContainer>
      <CheepCardProfilePhoto>
        <img src={user.profile_photo} alt="" />
      </CheepCardProfilePhoto>
      <CheepCardContentContainer>
        <CheepCardUsername>Name + Username</CheepCardUsername>
        <CheepCardContent>Content</CheepCardContent>
        <CheepCardActions>
          <div>
            <MdOutlineChatBubbleOutline />
          </div>
          <div>
            <MdOutlineCached />
          </div>
          <div>
            <MdFavoriteBorder />
          </div>
        </CheepCardActions>
      </CheepCardContentContainer>
    </CheepCardContainer>
  );
}
