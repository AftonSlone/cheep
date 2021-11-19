import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { ProfileButtonContainer } from "../../Styles/Home/ProfileButtonContainer.style";
import { Loader } from "../../Styles/Modal/Loader.style";

export default function ProfileButton() {
  const loading = useSelector((state) => state.loading.loading);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  if (loading) return;
  <ProfileButtonContainer>
    <Loader>
      <div />
    </Loader>
  </ProfileButtonContainer>;

  return (
    <ProfileButtonContainer onClick={onLogout}>
      <div>
        <img src={user.profile_photo} alt="" />
        <div>
          <span>{user.name}</span>
          <span>{`@${user.username}`}</span>
        </div>
      </div>
    </ProfileButtonContainer>
  );
}
