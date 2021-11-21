import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import { Modal } from "../Modal/Modal";
import CheepOptions from "./CheepOptions";

export default function CheepCard({ cheepId }) {
  const user = useSelector((state) => state.session.user);
  const [update, setUpdate] = useState(false);
  const [cheep, setCheep] = useState(null);
  const [actionsModal, setActionsModal] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/cheeps/${cheepId}`);
      const data = await res.json();
      setCheep(data);
    })();
  }, [update, cheepId]);

  const handleLikes = async (e, cheep_id) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    if (id > 0) {
      await fetch(`/api/likes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          cheep_id: cheep_id,
        }),
      });
      setUpdate(!update);
      return;
    }
    await fetch(`/api/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        cheep_id: cheep_id,
      }),
    });
    setUpdate(!update);
    return;
  };

  const userLiked = () => {
    if (cheep.likes) {
      for (const like of cheep.likes) {
        if (like.user_id === user.id)
          return (
            <MdFavorite
              id={`${user.id}`}
              onClick={(e) => handleLikes(e, cheep.id)}
            />
          );
      }
    }
    return (
      <MdFavoriteBorder id="0" onClick={(e) => handleLikes(e, cheep.id)} />
    );
  };

  if (!cheep)
    return (
      <CheepCardContainer>
        <Loader />
      </CheepCardContainer>
    );

  return (
    <CheepCardContainer>
      <CheepCardProfilePhoto>
        <img src={cheep.user.profile_photo} alt="" />
      </CheepCardProfilePhoto>
      <CheepCardContentContainer>
        <CheepCardUsername>
          {`@${cheep.user.username}`}{" "}
          <div onClick={() => setActionsModal(true)}>. . .</div>
        </CheepCardUsername>
        <CheepCardContent>{cheep.content}</CheepCardContent>
        <CheepCardActions>
          <div>
            <div>
              <MdOutlineChatBubbleOutline />
            </div>
            <div>{cheep.replies.length}</div>
          </div>
          <div>
            <div>
              <MdOutlineCached />
            </div>
            <div>{cheep.recheeps.length}</div>
          </div>
          <div>
            <div>{userLiked()}</div>
            <div>{cheep.likes.length}</div>
          </div>
        </CheepCardActions>
      </CheepCardContentContainer>
      {actionsModal && (
        <Modal type="edit">
          <CheepOptions setActionsModal={setActionsModal} />
        </Modal>
      )}
    </CheepCardContainer>
  );
}
