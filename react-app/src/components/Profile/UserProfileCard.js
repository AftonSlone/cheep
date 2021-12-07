import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCardContainer } from "../../Styles/Profile/ProfileCardContainer.style";
import { ProfileCardActions } from "../../Styles/Profile/ProfileCardActions.style";
import { ProfileCardContent } from "../../Styles/Profile/ProfileCardContent.style";
import { ProfileCardContentContainer } from "../../Styles/Profile/ProfileCardContentContainer.style";
import { ProfileCardProfilePhoto } from "../../Styles/Profile/ProfileCardProfilePhoto.style";
import { ProfileCardUsername } from "../../Styles/Profile/ProfileCardUsername.style";
import { updateEditProfileModal } from "../../store/profile";

export default function UserProfileCard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const profileUser = useSelector((state) => state.profile.user);
  return (
    <ProfileCardContainer>
      <ProfileCardProfilePhoto>
        <img src={profileUser.profile_photo} alt="" className="avatar" />
      </ProfileCardProfilePhoto>
      <ProfileCardContentContainer>
        <ProfileCardUsername>
          <p>{profileUser.name}</p>
          <p>{`@${profileUser.username}`}</p>
          {user.id === profileUser.id && (
            <div onClick={() => dispatch(updateEditProfileModal(true))}>
              Edit Profile
            </div>
          )}
        </ProfileCardUsername>
        <ProfileCardContent>{profileUser.bio}</ProfileCardContent>
        <ProfileCardActions>
          <div>{profileUser.following.length} Following</div>{" "}
          <div>{profileUser.followers.length} Followers</div>
        </ProfileCardActions>
      </ProfileCardContentContainer>
    </ProfileCardContainer>
  );
}
