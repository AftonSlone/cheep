import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, updateUserModal } from "../../store/session";
import { ProfileButtonContainer } from "../../Styles/Home/ProfileButtonContainer.style";

export default function ProfileButton() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <ProfileButtonContainer onClick={() => dispatch(updateUserModal(true))}>
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
