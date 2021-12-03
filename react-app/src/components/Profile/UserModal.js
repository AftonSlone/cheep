import React from "react";
import { useDispatch } from "react-redux";
import { logout, updateUserModal } from "../../store/session";
import { UserModalContainer } from "../../Styles/Profile/UserModalContainer.style";

export default function UserModal() {
  const dispatch = useDispatch();

  return (
    <UserModalContainer>
      <span onClick={() => dispatch(updateUserModal(false))}>X</span>
      <div
        onClick={() => {
          dispatch(updateUserModal(false));
          dispatch(logout());
        }}
      >
        Logout
      </div>
    </UserModalContainer>
  );
}
