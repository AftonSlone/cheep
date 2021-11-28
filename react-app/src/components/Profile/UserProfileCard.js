import React from "react";
import { useSelector } from "react-redux";
import { ProfileCardContainer } from "../../Styles/Profile/ProfileCardContainer.style";
import { ProfileCardActions } from "../../Styles/Profile/ProfileCardActions.style";
import { ProfileCardContent } from "../../Styles/Profile/ProfileCardContent.style";
import { ProfileCardContentContainer } from "../../Styles/Profile/ProfileCardContentContainer.style";
import { ProfileCardProfilePhoto } from "../../Styles/Profile/ProfileCardProfilePhoto.style";
import { ProfileCardUsername } from "../../Styles/Profile/ProfileCardUsername.style";

export default function UserProfileCard() {
  const user = useSelector((state) => state.session.user);
  return (
    <ProfileCardContainer>
      <ProfileCardProfilePhoto>
        <img src={user.profile_photo} alt="" className="avatar" />
      </ProfileCardProfilePhoto>
      <ProfileCardContentContainer>
        <ProfileCardUsername>
          <p>{user.name}</p>
          <p>{`@${user.username}`}</p>
        </ProfileCardUsername>
        <ProfileCardContent>{user.bio}</ProfileCardContent>
        <ProfileCardActions>
          <div>Edit Profile</div>
        </ProfileCardActions>
      </ProfileCardContentContainer>
    </ProfileCardContainer>
  );
}
