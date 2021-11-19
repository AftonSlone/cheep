import React from "react";
import { useSelector } from "react-redux";
import { ProfileButtonContainer } from "../../Styles/Home/ProfileButtonContainer.style";
import { Loader } from "../../Styles/Modal/Loader.style";

export default function ProfileButton() {
  const loading = useSelector((state) => state.loading.loading);
  const user = useSelector((state) => state.session.user);
  if (loading) return;
  <ProfileButtonContainer>
    <Loader>
      <div />
    </Loader>
  </ProfileButtonContainer>;

  return (
    <ProfileButtonContainer>
      <div>
        <img src={user.profile_photo}></img>
        <div>
          <span>{user.name}</span>
          <span>{`@${user.username}`}</span>
        </div>
      </div>

    </ProfileButtonContainer>
  );
}
