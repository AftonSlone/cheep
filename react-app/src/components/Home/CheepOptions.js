import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/session";
import { CheepCardOptionsContainer } from "../../Styles/Cheep/CheepCardOptionsContainer.style";
import { Loader } from "../../Styles/Modal/Loader.style";

export default function CheepOptions({
  setActionsModal,
  cheep,
  update,
  setUpdate,
  updateTimline,
  setUpdateTimeline,
}) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const following = () => {
    if (user.id === cheep.user_id) return null;
    for (const follower of user.following) {
      if (follower.followed_id === cheep.user_id)
        return (
          <div onClick={deleteFollow}>Unfollow {`@${cheep.user.username}`}</div>
        );
    }
    return <div onClick={addFollow}>Follow {`@${cheep.user.username}`}</div>;
  };

  const deleteFollow = async () => {
    await fetch(`/api/follows/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        follower_id: user.id,
        followed_id: cheep.user_id,
      }),
    });
    dispatch(fetchUser(user.id));
    setActionsModal(false);
    return;
  };

  const addFollow = async () => {
    await fetch(`/api/follows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        follower_id: user.id,
        followed_id: cheep.user_id,
      }),
    });
    dispatch(fetchUser(user.id));
    setActionsModal(false);
    return;
  };

  const deleteCheep = async () => {
    await fetch(`/api/cheeps/${cheep.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUpdateTimeline(cheep.id);
    setActionsModal(false);
    return;
  };

  if (!user)
    return (
      <CheepCardOptionsContainer>
        <Loader />
      </CheepCardOptionsContainer>
    );

  return (
    <CheepCardOptionsContainer>
      <span onClick={() => setActionsModal(false)}>X</span>
      {following()}
      {user.id === cheep.user_id && <div onClick={deleteCheep}>Delete</div>}
    </CheepCardOptionsContainer>
  );
}
